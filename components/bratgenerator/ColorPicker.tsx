'use client';

import { useState } from 'react';
import { ChromePicker } from 'react-color';

interface ColorPickerProps {
  id: string;
  color: string;
  onChange: (color: string) => void;
}

export default function ColorPicker({ id, color, onChange }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="w-10 h-10 rounded-md cursor-pointer border border-gray-300"
        style={{ backgroundColor: color }}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div className="absolute z-50 mt-2">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <ChromePicker
              color={color}
              onChange={(color) => {
                onChange(color.hex);
                setIsOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}