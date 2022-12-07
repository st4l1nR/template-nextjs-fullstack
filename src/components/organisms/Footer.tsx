import React from 'react';
import { Icon } from '@components/atoms';
import classNames from '@lib/classNames';
import Link from 'next/link';
export type props = {
  className?: string;
};
const Footer: React.FC<props> = ({ className }) => {
  return (
    <div className={classNames('py-12 bg-[#04050F] mt-24', className)}>
      <div className="flex flex-col h-full gap-5 text-white section-container sm:flex-row sm:items-center sm:justify-between ">
        <Link href="/">
          <Icon className="w-auto h-6" name="logo2" />
        </Link>

        <p>© 2022 Bensouda Breton - All Rights Reserved.</p>
        <div className="flex items-center space-x-5">
          <a href="https://www.facebook.com" target="_blank">
            <Icon className="text-primary-500 fill-current" name="facebook" />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <Icon className="text-primary-500" name="linkedin" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <Icon className="text-primary-500" name="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
