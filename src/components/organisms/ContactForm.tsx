import React from 'react';
import classNames from '@lib/classNames';
import { useForm } from 'react-hook-form';
import { Title, Button, Icon, TextField, TextArea } from '@components/atoms';

export type props = {
  className?: string;
};

type formData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm: React.FC<props> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();
  const onSubmit = (formData: formData) => {};

  return (
    <div
      className={classNames(
        'grid gap-5 section-container section-containre gird-cols sm:grid-cols-2',
        className
      )}
    >
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
        <form className="flex flex-col space-y-5 card max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
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
            rows={8}
            label="Message"
            error={errors.message?.message}
            {...register('message', { required: 'Required' })}
          />
          <Button type="submit" label="Envoyer" fullWidth={true} />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
