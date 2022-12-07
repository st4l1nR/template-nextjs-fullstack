import React from 'react';
import { Title, Checkbox, TextField, Select } from '@components/atoms';
import { FooterStep } from '@components/molecules/indext';
import classNames from '@lib/classNames';
import { UseFormReturn } from 'react-hook-form';
import { SubventionFormInput } from '@ctypes/local';

export type props = {
  className?: string;
} & UseFormReturn<SubventionFormInput>;

const Step2A: React.FC<props> = ({ className, register, formState: { errors } }) => {
  return (
    <div className={classNames('py-10 card px-14', className)}>
      <div className="mt-12 flex flex-col space-y-8 divide-y">
        <div className="flex space-x-5 pb-5">
          <div className="circle"></div>
          <div>
            <Title level="h5" text="Type de corporation" />
            <div className="mt-7 flex flex-col space-y-5">
              <Checkbox label="Expansion des affaires" value="1" {...register('projectType')} />
              <Checkbox label="Investissements en capital" value="2" {...register('projectType')} />
              <Checkbox
                label="Développement des ressources humaines"
                value="1"
                {...register('projectType')}
              />
              <Checkbox label="Innovation et R&D" value="3" {...register('projectType')} />
              <Checkbox label="Technologies environnementales" value="4" {...register('projectType')} />
            </div>
          </div>
        </div>
        <div className="flex space-x-5 pb-5">
          <div className="circle"></div>
          <div>
            <Title level="h5" text="Type de corporation" />
            <div className="mt-7 flex flex-col space-y-5">
              <Checkbox label="Création d’emplois" value="1" {...register('benefit')} />
              <Checkbox label="Embauche de personnel technique" value="2" {...register('benefit')} />
              <Checkbox label="Croissance des ventes" value="3" {...register('benefit')} />
              <Checkbox label="Croissance des bénéfices nets" value="3" {...register('benefit')} />
              <Checkbox label="Réduction des coûts d’un procédé" value="4" {...register('benefit')} />
              <Checkbox label="Santé publique" value="5" {...register('benefit')} />
              <Checkbox
                label="Environnement et développement durable"
                value="6"
                {...register('benefit')}
              />
              <Checkbox
                label="Environnement et développement durable"
                value="6"
                {...register('benefit')}
              />
              <Checkbox label="Sécurité accrue pour les Canadiens" value="7" {...register('benefit')} />
              <Checkbox label="Autres bienfaits" value="8" {...register('benefit')} />
            </div>
          </div>
        </div>

        <FooterStep className="pt-5" />
      </div>
    </div>
  );
};

export default Step2A;
