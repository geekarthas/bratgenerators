'use client';

import { useState, useRef, useEffect } from 'react';
import { DownloadIcon, CopyIcon } from 'lucide-react';
import ColorPicker from './ColorPicker';
import Header from './Header';
import Footer from './Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { colorPresets } from '@/lib/presets';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import html2canvas from 'html2canvas';

export default function BratGenerator() {
  const [text, setText] = useState('brat');
  const [bgColor, setBgColor] = useState('#9ADE00');
  const [textColor, setTextColor] = useState('#000000');
  const [mirrorText, setMirrorText] = useState(false);
  const [centerText, setCenterText] = useState(false);
  const [preset, setPreset] = useState('brat');
  const [fontSize, setFontSize] = useState(6);
  const previewRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (preset !== 'custom') {
      const colors = colorPresets.find(p => p.id === preset);
      if (colors) {
        setBgColor(colors.background);
        setTextColor(colors.text);
      }
    }
  }, [preset]);

  useEffect(() => {
    // 根据文本长度自动调整字体大小
    const words = text.split(' ');
    const maxLength = Math.max(...words.map(word => word.length));
    const wordCount = words.length;
    const totalLength = text.length;
    
    // 基础大小
    let newSize = 6;
    
    // 根据总长度调整
    if (totalLength > 4) newSize -= 0.5;
    if (totalLength > 8) newSize -= 0.5;
    if (totalLength > 12) newSize -= 0.5;
    if (totalLength > 16) newSize -= 0.5;
    
    // 根据单词数量调整
    if (wordCount > 1) newSize -= 0.5;
    if (wordCount > 2) newSize -= 0.5;
    if (wordCount > 3) newSize -= 0.5;
    
    // 根据最长单词长度调整
    if (maxLength > 4) newSize -= 0.5;
    if (maxLength > 6) newSize -= 0.5;
    if (maxLength > 8) newSize -= 0.5;
    
    setFontSize(Math.max(2.5, newSize)); // 最小字体大小为2.5rem
  }, [text]);

  const renderArt = async () => {
    if (!previewRef.current) return null;
    const canvas = await html2canvas(previewRef.current, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
      imageTimeout: 0,
      removeContainer: true,
      onclone: (clonedDoc) => {
        // 确保字体正确加载
        const style = document.createElement('style');
        style.textContent = `
          @font-face {
            font-family: 'Arial Narrow';
            src: local('Arial Narrow');
          }
        `;
        clonedDoc.head.appendChild(style);
      }
    });

    // 创建临时 canvas 用于应用模糊效果
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return canvas;

    // 设置临时 canvas 尺寸
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;

    // 应用模糊效果
    tempCtx.filter = 'blur(2px)';
    tempCtx.drawImage(canvas, 0, 0);

    // 应用缩放效果
    const finalCanvas = document.createElement('canvas');
    const finalCtx = finalCanvas.getContext('2d');
    if (!finalCtx) return tempCanvas;

    finalCanvas.width = canvas.width;
    finalCanvas.height = canvas.height;

    // 绘制缩放后的图像
    finalCtx.scale(0.85, 0.85);
    finalCtx.drawImage(tempCanvas, 0, 0);
    finalCtx.setTransform(1, 0, 0, 1, 0, 0);

    return finalCanvas;
  };

  const downloadImage = async () => {
    try {
      const canvas = await renderArt();
      if (!canvas) return;
      
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `${text}.png`;
      link.click();
      
      toast({
        title: "Success!",
        description: "Image downloaded successfully.",
      });
    } catch (error) {
      console.error('Error downloading image:', error);
      toast({
        title: "Error",
        description: "Failed to download image.",
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = async () => {
    try {
      const canvas = await renderArt();
      if (!canvas) return;
      
      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
        }, 'image/png', 1.0);
      });
      
      const item = new ClipboardItem({ 'image/png': blob });
      await navigator.clipboard.write([item]);
      
      toast({
        title: "Copied!",
        description: "Image copied to clipboard.",
      });
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      toast({
        title: "Error",
        description: "Failed to copy to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: bgColor }}>
      <Header />
      
      <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 transition-all">
        {/* Preview Area */}
        <div className="shadow-lg mb-8">
          <div 
            ref={previewRef}
            className="preview-container w-96 h-96 flex items-center justify-center p-4 relative"
            style={{ 
              backgroundColor: bgColor,
              color: textColor,
              fontFamily: "'Arial Narrow', Arial, sans-serif",
              textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
              letterSpacing: '3px',
              filter: 'blur(2px)',
              backfaceVisibility: 'hidden',
              fontSize: `${fontSize}rem`,
              fontWeight: '400',
              lineHeight: '1',
              textTransform: 'uppercase',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word'
            }}
          >
            <div 
              className={`flex flex-col items-start justify-center w-full h-full
                ${centerText ? 'items-center' : ''}
                ${mirrorText ? 'transform scale-x-[-1]' : ''}`}
            >
              {text.split('\n').map((line, index) => (
                <div 
                  key={index} 
                  className={`${centerText ? "text-center" : "text-left"} whitespace-normal break-words`}
                  style={{ 
                    width: '100%',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word'
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="w-full max-w-3xl bg-white/20 backdrop-blur-sm rounded-lg p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side - Text Controls */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="text-input">Text</Label>
                <textarea
                  id="text-input"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full h-24 p-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your text"
                  style={{ resize: 'none' }}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="center-text" 
                  checked={centerText} 
                  onCheckedChange={(checked) => setCenterText(checked === true)}
                />
                <Label htmlFor="center-text">Center text</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="mirror-text" 
                  checked={mirrorText} 
                  onCheckedChange={(checked) => setMirrorText(checked === true)}
                />
                <Label htmlFor="mirror-text">Mirror text</Label>
              </div>
            </div>
            
            {/* Right Side - Color Controls */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="preset-select">Color presets</Label>
                <Select
                  value={preset}
                  onValueChange={(value) => setPreset(value)}
                >
                  <SelectTrigger id="preset-select" className="w-full bg-white/80">
                    <SelectValue placeholder="Select a preset" />
                  </SelectTrigger>
                  <SelectContent>
                    {colorPresets.map((preset) => (
                      <SelectItem 
                        key={preset.id} 
                        value={preset.id}
                        style={{
                          color: preset.text,
                          backgroundColor: preset.background
                        }}
                      >
                        {preset.name}
                      </SelectItem>
                    ))}
                    <SelectItem value="custom">Custom color</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex flex-col space-y-4">
                <div>
                  <Label htmlFor="bg-color">Background</Label>
                  <ColorPicker
                    id="bg-color"
                    color={bgColor}
                    onChange={(color) => {
                      setBgColor(color);
                      setPreset('custom');
                    }}
                    disabled={preset !== 'custom'}
                  />
                </div>
                
                <div>
                  <Label htmlFor="text-color">Text</Label>
                  <ColorPicker
                    id="text-color"
                    color={textColor}
                    onChange={(color) => {
                      setTextColor(color);
                      setPreset('custom');
                    }}
                    disabled={preset !== 'custom'}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              onClick={downloadImage} 
              className="flex items-center gap-2 bg-black/80 hover:bg-black text-xl"
            >
              <DownloadIcon size={18} /> download
            </Button>
            <Button 
              onClick={copyToClipboard} 
              className="flex items-center gap-2 bg-black/80 hover:bg-black text-xl"
            >
              <CopyIcon size={18} /> copy to clipboard
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 text-center text-gray-600">
        <h1 className="text-2xl font-bold mb-4">bratgenerators - Brat Text Generator</h1>
        <h2 className="text-xl font-semibold mb-2">Create Unique Text Art</h2>
        <p className="mb-6">Generate stylish brat text with custom colors and effects. Perfect for social media posts, banners, and more.</p>
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Custom text input with 200 character limit</li>
          <li>Multiple color presets and custom color options</li>
          <li>Text effects including mirror and center alignment</li>
          <li>Download and copy to clipboard functionality</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">How to Use</h2>
        <ol className="list-decimal list-inside">
          <li>Enter your text in the input field</li>
          <li>Choose a color preset or customize your colors</li>
          <li>Adjust text effects as needed</li>
          <li>Download or copy your generated image</li>
        </ol>
      </div>
      <Footer />
      <Toaster />
    </div>
    
  );
  
}