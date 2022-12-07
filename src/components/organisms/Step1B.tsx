import React from 'react';
import { Title, Radio, TextField, Select } from '@components/atoms';
import { FooterStep } from '@components/molecules/indext';
import classNames from '@lib/classNames';
import { UseFormReturn } from 'react-hook-form';
import { CreditFormInput } from '@ctypes/local';

export type props = {
  className?: string;
} & UseFormReturn<CreditFormInput>;

const Step1B: React.FC<props> = ({ className, register, formState: { errors } }) => {
  return (
    <div className={classNames('py-10 card px-14', className)}>
      <Title
        level="h6"
        text="Vous pouvez calculer ci-joint les montants de crédits RS&DE auxquels vous avez droit."
      />
      <div className="mt-12 flex flex-col space-y-8 divide-y">
        <div className="flex space-x-5 pb-5">
          <div className="circle"></div>
          <div>
            <Title level="h5" text="Type de corporation" />
            <div className="mt-7 flex flex-col space-y-5">
              <Radio
                label="Société privée sous contrôle canadien (SPCC)"
                value="sppc"
                {...register('corporationType')}
              />
              <Radio label="Non-SPCC" value="non-sspc" {...register('corporationType')} />
            </div>
          </div>
        </div>
        <div className="flex space-x-5 pt-5">
          <div className="circle"></div>
          <div>
            <Title
              level="h5"
              text="Total des salaires pour des activités de RS&DE (entrer des nombres entiers)"
            />
            <div className="mt-7 flex flex-col space-y-5">
              <TextField
                type="number"
                error={errors.totalSalaries?.message}
                {...register('totalSalaries', { required: 'Obligatoire', valueAsNumber: true })}
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-5 pt-5">
          <div className="circle"></div>
          <div>
            <Title level="h5" text="Matériaux utilisés pour la RS&DE  (entrer des nombres entiers)" />
            <div className="mt-7 flex flex-col space-y-5">
              <TextField
                type="number"
                error={errors.totalMaterials?.message}
                {...register('totalMaterials', { required: 'Obligatoire', valueAsNumber: true })}
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-5 pt-5">
          <div className="circle"></div>
          <div>
            <Title
              level="h5"
              text="Total sous-traitants (Canadiens) pour des travaux de RS&DE  (entrer des nombres entiers)"
            />
            <div className="mt-7 flex flex-col space-y-5">
              <TextField
                type="number"
                error={errors.totalSubcontractors?.message}
                {...register('totalSubcontractors', { required: 'Obligatoire', valueAsNumber: true })}
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-5 pt-5">
          <div className="circle"></div>
          <div>
            <Title level="h5" text="Source de financement" />
            <div className="mt-7 flex flex-col space-y-5">
              <Select
                options={[{ name: 'Source 1', value: '1' }]}
                error={errors.sourceFunding?.message}
                {...register('sourceFunding', { required: 'Obligatoire' })}
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-5 pt-5">
          <div className="circle"></div>
          <div>
            <Title level="h5" text="Montant du financement (entrer des nombres entiers)" />
            <div className="mt-7 flex flex-col space-y-5">
              <TextField
                type="number"
                error={errors.totalFunding?.message}
                {...register('totalFunding', { required: 'Obligatoire', valueAsNumber: true })}
              />
            </div>
          </div>
        </div>
        <FooterStep className="pt-5" prev="1a" />
      </div>
    </div>
  );
};

export default Step1B;
