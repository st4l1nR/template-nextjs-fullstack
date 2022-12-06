import React from 'react';
import { Title, ButtonLink, Icon, TextField, TextArea, Radio } from '@components/atoms';
import { LayoutDefault } from '@components/templates';
import { useForm } from 'react-hook-form';
type formData = {
  x: string;
};

const index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();
  const onSubmit = (formData: formData) => {};
  return (
    <div className="mt-32 section-container">
      <div className="py-10 card px-14">
        <div className="flex pb-10 space-x-5">
          <div className="circle"></div>
          <div>
            <Title level="h6" text="Cliquez sur les cases qui s’appliquent à votre projet :" />
            <div className="flex flex-col mt-8 space-5">
              <Radio label="Les travaux ont pris plus de temps à compléter que prévu" {...register('x')} />
              <Radio label="Les travaux n’ont pas abouti" {...register('x')} />
              <Radio
                label="Les travaux ont exigé l’essai de plusieurs solutions possibles à travers l’analyse ou l’expérimentation avant de trouver une solution acceptable
ou avant l’abandon du projet"
                {...register('x')}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-10 border-t">
          <ButtonLink href="/" label="Precedent" color="neutral" icon={<Icon name="arrow-left" />} />
          <ButtonLink href="/" label="Suivant" icon={<Icon name="arrow-right" />} iconPosition="right" />
        </div>
      </div>
    </div>
  );
};

index.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault variant="secondary">{page}</LayoutDefault>;
};
export default index;
