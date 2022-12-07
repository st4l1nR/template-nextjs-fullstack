import React, { useState, useEffect } from 'react';
import { LayoutDefault } from '@components/templates';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Step1A, Step1B, StepConfirmation, ContactForm } from '@components/organisms';
import { CreditFormInput } from '@ctypes/local';

type stepOption = '1a' | '1b' | '1c' | '1d';

const index = () => {
  const useFormReturn = useForm<CreditFormInput>();
  const router = useRouter();
  const [step, steStep] = useState<stepOption>('1c');
  const {
    handleSubmit,
    formState: { errors },
  } = useFormReturn;
  const isConfirmation = step == '1c' || step == '1d';

  const handleNext = (step) => {
    router.push(`/credits/?step=${step}`, undefined, { shallow: true });
  };

  const onSubmit = (formData: CreditFormInput) => {
    const { workState } = formData;
    if (step == '1a') {
      if (workState) {
        handleNext('1b');
      } else {
        handleNext('1d');
      }
    }
    if (step == '1b') {
      handleNext('1c');
    }
    if (step == '1c') {
      handleNext('1d');
    }
  };

  useEffect(() => {
    const { step } = router.query;
    if (step) {
      steStep(step as any);
    }
  }, [router.query]);

  return (
    <div>
      <form className="mt-32 section-container" onSubmit={handleSubmit(onSubmit)}>
        {step == '1a' ? (
          <Step1A {...useFormReturn} />
        ) : step == '1b' ? (
          <Step1B {...useFormReturn} />
        ) : step == '1c' ? (
          <StepConfirmation variant="1c" {...useFormReturn} />
        ) : (
          <StepConfirmation variant="1d" {...useFormReturn} />
        )}
      </form>
      {isConfirmation && <ContactForm className="mt-24" />}
    </div>
  );
};

index.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault variant="secondary">{page}</LayoutDefault>;
};
export default index;
