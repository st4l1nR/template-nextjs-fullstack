import React from 'react';
import { Icon } from '@components/atoms';
import classNames from '@lib/classNames';
import Link from 'next/link';

export type props = {
  className?: string;
};
const Navbar: React.FC<props> = ({ className }) => {
  return (
    <div className={classNames('h-32 flex items-center', className)}>
      <div className="flex justify-between w-full section-container">
        <Link href="/">
          <Icon className="w-auto h-8" name="logo1" />
        </Link>

        <div className="flex items-center max-w-xl space-x-3 text-lg font-bold text-center text-white">
          <Link href="#">Crédits R&D (RS&DE) Éligibilité</Link>
          <Link href="#">Crédits R&D (RS&DE) Éligibilité</Link>
          <Link href="#">Crédits R&D (RS&DE) Éligibilité</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
