import React, { FC } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import classNames from '@lib/classNames';

export type props = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  UseFormRegisterReturn & {
    className?: string;
    type?: 'text' | 'email' | 'password';
    color?: 'primary';
    label?: string;
    error?: string;
    fullWidth?: boolean;
  };
const TextArea = React.forwardRef<any, props>(
  ({ className, color, label, error, type, fullWidth, ...props }, ref) => {
    return (
      <div className={classNames(fullWidth && 'w-full', className)}>
        {label && <label className="input-label">{label}</label>}
        <textarea
          className={classNames('textfield-primary', fullWidth && 'w-full',  label && "mt-1")}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 ml-1 text-xs text-red-500 ">{error}</p>}
      </div>
    );
  }
);

TextArea.defaultProps = {
  color: 'primary',
  type: 'text',
  fullWidth: true,
};

export default TextArea;
