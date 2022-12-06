import React, { FC } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

export type props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  UseFormRegisterReturn & {
    color?: 'primary';
    label: string;
  };
const Radio = React.forwardRef<any, props>(({ color, label, ...props }, ref) => {
  return (
    <div className="flex items-center mb-4 items">
      <input type="radio" value="1" className="radio-primary" ref={ref} {...props} />
      <label className="ml-2 text-sm font-medium text-gray-900 ">{label}</label>
    </div>
  );
});

Radio.defaultProps = {
  color: 'primary',
};

export default Radio;
