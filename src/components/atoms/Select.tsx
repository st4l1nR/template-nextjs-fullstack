import React, { FC } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import classNames from '@lib/classNames';

export type props = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  UseFormRegisterReturn & {
    className?: string;
    color?: 'primary';
    label?: string;
    error?: string;
    options: {
      name: string;
      value: any;
      section?: string;
      disabled?: boolean;
    }[];
    fullWidth?: boolean;
  };
const Select = React.forwardRef<any, props>(
  ({ className, color, label, error, options, fullWidth, ...props }, ref) => {
    const sectionNames: string[] = [];
    options?.forEach((option) => {
      if (!sectionNames.includes(option.section)) sectionNames.push(option.section);
    });
    const sections = sectionNames.map((sectionName) => {
      return options.filter((option) => option.section == sectionName);
    });
    return (
      <div className={classNames(fullWidth && 'w-full', className)}>
        {label && <label className="input-label">{label}</label>}
        <select
          className={classNames(
            'pr-2',
            color == 'primary' && 'select-primary',
            fullWidth && 'w-full',
            label && 'mt-1'
          )}
          ref={ref}
          {...props}
        >
          <>
            {sectionNames[0]
              ? sections.map((section, idx) => (
                  <optgroup label={sectionNames[idx]} key={idx}>
                    {section.map(({ name, value }, idx) => (
                      <option value={value}>{name}</option>
                    ))}
                  </optgroup>
                ))
              : options?.map(({ name, value, disabled }, idx) => (
                  <option key={idx} value={value} disabled={disabled}>
                    {name}
                  </option>
                ))}
          </>
        </select>
        {error && <p className="mt-1 ml-1 text-xs text-red-500 ">{error}</p>}
      </div>
    );
  }
);

Select.defaultProps = {
  color: 'primary',
  fullWidth: true,
};

export default Select;
