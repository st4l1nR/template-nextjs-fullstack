import React from 'react';
import { Hero, Footer } from '@components/organisms';

export type props = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
};
const LayoutDefault: React.FC<props> = ({ variant, children }) => {
  return (
    <div className="bg-[#E5E5E5]">
      <Hero variant={variant} />
      <div className="relative z-10">{children}</div>
      <Footer />
    </div>
  );
};
LayoutDefault.defaultProps = {
  variant: 'primary',
};

export default LayoutDefault;
