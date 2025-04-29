'use client';

import { useState } from 'react';
import { ChromePicker, ColorResult } from 'react-color';

interface ColorPickerProps {
  id: string;
  color: string;
  onChange: (color: string) => void;
  disabled?: boolean;
}

export default function ColorPicker({ id, color, onChange, disabled = false }: ColorPickerProps) {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="relative">
      <div
        id={id}
        className={`w-10 h-10 rounded-md cursor-pointer border-2 border-gray-200 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        style={{ backgroundColor: color }}
        onClick={() => !disabled && setShowPicker(!showPicker)}
      />
      {showPicker && !disabled && (
        <div className="absolute z-10 mt-2">
          <div className="fixed inset-0" onClick={() => setShowPicker(false)} />
          <ChromePicker
            color={color}
            onChange={(color: ColorResult) => onChange(color.hex)}
            disableAlpha
          />
        </div>
      )}
    </div>
  );
}