import React, { useState, useRef, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeInputProps {
  value?: string;
  onChange?: (time: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const TimeInput: React.FC<TimeInputProps> = ({
  value = "00:00AM",
  onChange,
  placeholder = "00:00AM",
  disabled = false,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState(12);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState<'AM' | 'PM'>('AM');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Parse initial value
  useEffect(() => {
    if (value) {
      const match = value.match(/(\d{1,2}):(\d{2})(AM|PM)/);
      if (match) {
        setSelectedHour(parseInt(match[1]));
        setSelectedMinute(parseInt(match[2]));
        setSelectedPeriod(match[3] as 'AM' | 'PM');
      }
    }
  }, [value]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatTime = (hour: number, minute: number, period: 'AM' | 'PM') => {
    const formattedHour = hour.toString().padStart(2, '0');
    const formattedMinute = minute.toString().padStart(2, '0');
    return `${formattedHour}:${formattedMinute}${period}`;
  };

  const handleTimeChange = (hour: number, minute: number, period: 'AM' | 'PM') => {
    const timeString = formatTime(hour, minute, period);
    onChange?.(timeString);
  };

  const handleHourChange = (hour: number) => {
    setSelectedHour(hour);
    handleTimeChange(hour, selectedMinute, selectedPeriod);
  };

  const handleMinuteChange = (minute: number) => {
    setSelectedMinute(minute);
    handleTimeChange(selectedHour, minute, selectedPeriod);
  };

  const handlePeriodChange = (period: 'AM' | 'PM') => {
    setSelectedPeriod(period);
    handleTimeChange(selectedHour, selectedMinute, period);
  };

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        className={`
          flex items-center justify-between px-3 py-2 border border-gray-300 rounded-lg bg-white cursor-pointer
          hover:border-gray-400 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500
          ${disabled ? 'bg-gray-50 cursor-not-allowed opacity-50' : ''}
        `}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
          </div>
          <span className="text-sm font-medium text-gray-700">
            {formatTime(selectedHour, selectedMinute, selectedPeriod)}
          </span>
        </div>
        <Clock className="w-4 h-4 text-gray-400" />
      </div>

      {isOpen && !disabled && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 p-4 min-w-[300px]">
          <div className="flex gap-4">
            {/* Hours */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700 mb-2">Hour</label>
              <div className="max-h-32 overflow-y-auto border border-gray-200 rounded">
                {hours.map((hour) => (
                  <div
                    key={hour}
                    className={`px-3 py-1 text-sm cursor-pointer hover:bg-gray-100 ${
                      selectedHour === hour ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                    }`}
                    onClick={() => handleHourChange(hour)}
                  >
                    {hour.toString().padStart(2, '0')}
                  </div>
                ))}
              </div>
            </div>

            {/* Minutes */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700 mb-2">Minute</label>
              <div className="max-h-32 overflow-y-auto border border-gray-200 rounded">
                {minutes.filter(m => m % 5 === 0).map((minute) => (
                  <div
                    key={minute}
                    className={`px-3 py-1 text-sm cursor-pointer hover:bg-gray-100 ${
                      selectedMinute === minute ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                    }`}
                    onClick={() => handleMinuteChange(minute)}
                  >
                    {minute.toString().padStart(2, '0')}
                  </div>
                ))}
              </div>
            </div>

            {/* AM/PM */}
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-700 mb-2">Period</label>
              <div className="border border-gray-200 rounded">
                {(['AM', 'PM'] as const).map((period) => (
                  <div
                    key={period}
                    className={`px-3 py-1 text-sm cursor-pointer hover:bg-gray-100 ${
                      selectedPeriod === period ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                    }`}
                    onClick={() => handlePeriodChange(period)}
                  >
                    {period}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeInput
