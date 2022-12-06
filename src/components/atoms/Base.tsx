import React from 'react';
import classNames from '@lib/classNames';

export type props = {
  className?: string;
};
const Base: React.FC<props> = ({ className }) => {
  return <div className={classNames('', className)}></div>;
};

export default Base;
