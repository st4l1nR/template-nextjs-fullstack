import React, { FC } from 'react';
import classNames from '@lib/classNames';

export interface props {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  label: string;
  rounded: boolean;
}
const index: FC<props> = ({ variant, size, label, rounded }) => {
  const style = classNames(
    'bg-blue-500 py-3 px-5 flex items-center justify-center font-bold text-white',
    variant == 'primary' ? 'bg-blue-500' : 'bg-pink-500',
    size == 'sm' ? 'w-24' : size == 'md' ? 'w-32' : 'w-52',
    rounded && 'rounded-md'
  );
  return <div className={style}>{label}</div>;
};
index.defaultProps = {
  variant: 'primary',
  size: 'md',
  label: 'Button',
  rounded: false,
};
export default index;
