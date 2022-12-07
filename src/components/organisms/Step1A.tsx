import React from 'react';
import { Title, ButtonLink, Icon, Checkbox } from '@components/atoms';
import { FooterStep } from '@components/molecules/indext';
import classNames from '@lib/classNames';
import { UseFormReturn } from 'react-hook-form';
export type props = {
  className?: string;
} & UseFormReturn<any>;

const Step1A: React.FC<props> = ({ className, register }) => {
  return (
    <div className={classNames('py-10 card px-14', className)}>
      <div className="flex pb-10 space-x-5">
        <div className="circle"></div>
        <div>
          <Title level="h6" text="Cliquez sur les cases qui s'appliquent à votre projet:" />
          <div className="flex flex-col mt-8 space-y-5">
            <Checkbox
              label="Les travaux ont pris plus de temps à compléter que prévu"
              {...register('workState')}
            />
            <Checkbox label="Les travaux n'ont pas abouti" {...register('workState')} />
            <Checkbox
              label="Les travaux ont exigé l'essai de plusieurs solutions possibles à travers l'analyse ou l'expérimentation avant de trouver une solution acceptable
ou avant l'abandon du projet"
              {...register('workState')}
            />
          </div>
        </div>
      </div>
      <FooterStep />
    </div>
  );
};

export default Step1A;
