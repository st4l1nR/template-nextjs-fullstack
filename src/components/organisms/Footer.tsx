import React from 'react';
import { Icon } from '@components/atoms';
import classNames from '@lib/classNames';

export type props = {
  className?: string;
};
const Footer: React.FC<props> = ({ className }) => {
  return (
    <div className={classNames('py-12 bg-[#04050F] mt-24', className)}>
      <div className="flex flex-col h-full gap-5 text-white section-container sm:flex-row sm:items-center sm:justify-between ">
        <Icon className="w-auto h-6" name="logo2" />
        <p>© 2022 Bensouda Breton - All Rights Reserved.</p>
        <div className="flex items-center space-x-5">
          <a href="https://www.facebook.com" target="_blank">
            <Icon className="text-primary" name="facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <Icon className="text-primary" name="twitter" />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <Icon className="text-primary" name="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
