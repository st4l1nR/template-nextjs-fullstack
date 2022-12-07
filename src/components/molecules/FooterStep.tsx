import React from 'react';
import classNames from '@lib/classNames';
import { Button, Icon } from '@components/atoms';
import { useRouter } from 'next/router';

export type props = {
  className?: string;
  prev?: string;
  hideNext?: boolean;
};
const Base: React.FC<props> = ({ className, prev, hideNext }) => {
  const router = useRouter();
  const handlePrev = () => {
    router.push(`?step=${prev}`, undefined, { shallow: true });
  };

  return (
    <div className={classNames('flex justify-between pt-10 border-t', className)}>
      <Button
        label="Precedent"
        color={prev ? 'primary' : 'neutral'}
        icon={<Icon name="arrow-left" />}
        onClick={handlePrev}
        disabled={!prev}
      />
      {!hideNext && (
        <Button type="submit" label="Suivant" icon={<Icon name="arrow-right" />} iconPosition="right" />
      )}
    </div>
  );
};

export default Base;
