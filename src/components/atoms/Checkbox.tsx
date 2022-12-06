import React, { FC } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

export type props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  UseFormRegisterReturn & {
    className?:string
    color?: 'primary';
    label?: string;
    error?: string;
  };
const Radio = React.forwardRef<any, props>(({ className, color, label, error, ...props }, ref) => {
  return (
    <div className={className}>
      <div className="flex items-center">
        <input type="checkbox" className={color == 'primary' && 'checkbox-primary'} ref={ref} {...props} />
        {label && <label className="ml-2 input-label ">{label}</label>}
      </div>
      {error && <p className="mt-1 ml-1 text-xs text-red-500 ">{error}</p>}
    </div>
  );
});

Radio.defaultProps = {
  color: 'primary',
};

export default Radio;
