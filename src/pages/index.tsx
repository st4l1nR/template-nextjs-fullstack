import React from 'react';
import { Title, Button, Icon, TextField, TextArea } from '@components/atoms';
import { LayoutDefault } from '@components/templates';
import { useForm } from 'react-hook-form';
type formData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};
const index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();
  const onSubmit = (formData: formData) => {};
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 mt-64 section-container sm:grid-cols-2">
        <div className="card">
          <div>
            <Title level="h4" text="Crédits R&D (RS&DE)" />
            <p className="mt-5">
              Le programme fédéral le plus important pour encourager les entreprises à prendre des risques
              technologiques. Nous vous aidons à monter le dossier, remplir les formulaires et vous assistent
              en cas d’audit. Allez sur l’onglet pour savoir si votre projet est éligible et combien vous sera
              remboursé.
            </p>
          </div>
          <div className="mt-8">
            <Title level="h4" text="Subventions" />
            <p className="mt-5">
              Vous cherchez du financement pour vos projets? Des centaines de programmes gouvernementaux sont
              disponibles avec des montants allant de milliers à des millions de dollars. Allez sur l’onglet
              pour savoir si votre projet est admissible.
            </p>
          </div>
        </div>
        <div className="card">
          <Title level="h4" text="Planification stratégique" />
          <p className="mt-5">
            Il est parfois difficile pour les entreprises de choisir entre appliquer pour les subventions, les
            crédits d’impôt ou les deux. L’innovation, la technologie et la planification stratégique sont nos
            passions. Laissez-nous vous aider quelle que soit votre industrie : TI, design industriel,
            environnement, construction, pharmaceutique, alimentaire, biomédical etc.
          </p>
          <p className="mt-5">
            Nous sommes une équipe d’entrepreneurs, investisseurs et consultants qui avons acquis pendant plus
            de 15 ans, des connaissances et de l’expérience en prenant des défis de plus en plus complexes,
            aidant les PME à démarrer, à se redresser ou à prospérer.
          </p>
        </div>
      </div>
      <div className="grid gap-5 mt-24 section-container section-containre gird-cols sm:grid-cols-2">
        <div className="flex flex-col space-y-5">
          <Title level="h2" text="Contactez-nous, nous organiserons une rencontre gratuite!" />
          <img src="/images/jump-1.png" alt="" className="aspect-video" />
          <div className="flex flex-col space-y-3 font-medium">
            <div className="flex items-center space-x-3">
              <Button className="cursor-default" shape="pill" icon={<Icon name="envelop" />} />
              <p>info@bensouda-breton.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button className="cursor-default" shape="pill" icon={<Icon name="phone" />} />
              <p>+1 (514) 998-8524</p>
            </div>
          </div>
        </div>
        <div>
          <form className="flex flex-col space-y-5 card" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <TextField
                label="Prénom"
                error={errors.firstName?.message}
                {...register('firstName', { required: 'Required' })}
              />{' '}
              <TextField
                label="Nom"
                error={errors.lastName?.message}
                {...register('lastName', { required: 'Required' })}
              />
            </div>
            <TextField
              label="Courriel"
              type="email"
              error={errors.email?.message}
              {...register('email', { required: 'Required' })}
            />
            <TextField
              type="phone"
              label="Téléphone"
              error={errors.phone?.message}
              {...register('phone', { required: 'Required' })}
            />
            <TextArea
              label="Message"
              error={errors.message?.message}
              {...register('message', { required: 'Required' })}
            />
            <Button type="submit" label="Envoyer" fullWidth={true} />
          </form>
        </div>
      </div>
    </div>
  );
};

index.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
export default index;
