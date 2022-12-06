import React, { FC } from 'react';
import classNames from '@lib/classNames';

export type props = {
  className?: string;
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
  align?: 'right' | 'center' | 'left';
};
const Title: FC<props> = ({ className, level, text, align }) => {
  const alignStyle = classNames(
    align == 'right' ? 'text-right' : align == 'center' && 'text-center' 
  );
  switch (level) {
    case 'h1':
      return <h1 className={classNames('text-5xl font-extrabold ', alignStyle, className)}>{text}</h1>;
    case 'h2':
      return <h2 className={classNames('text-4xl font-bold', alignStyle, className)}>{text}</h2>;
    case 'h3':
      return <h3 className={classNames('text-3xl font-bold', alignStyle, className)}>{text}</h3>;
    case 'h4':
      return <h4 className={classNames('text-2xl font-bold', alignStyle, className)}>{text}</h4>;
    case 'h5':
      return <h5 className={classNames('text-xl font-bold', alignStyle, className)}>{text}</h5>;
    case 'h6':
      return <h6 className={classNames('text-lg font-bold', alignStyle, className)}>{text}</h6>;
  }
};
Title.defaultProps = {
  level: 'h1',
  text: 'Title',
  align: 'left',
};
export default Title;
