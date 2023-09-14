export type DatePickerType = 'single' | 'interval';

export interface DatePickerProps {
  currentDate: Date;
  type?: DatePickerType
  onDone?: (inputValue: string) => void;
  onClose?: (ref?: HTMLElement) => void;
  language?: string;
}

export type MonthFormat = 'long' | 'short';
