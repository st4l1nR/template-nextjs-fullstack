import React, { useState, useEffect } from 'react';
import { LayoutDefault } from '@components/templates';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Step2A, Step1B, StepConfirmation, ContactForm } from '@components/organisms';
import { SubventionFormInput } from '@ctypes/local';

type stepOption = '2a' | '2b' | '2c';

const index = () => {
  const useFormReturn = useForm<SubventionFormInput>();
  const router = useRouter();
  const [step, steStep] = useState<stepOption>('2a');
  const {
    handleSubmit,
    formState: { errors },
  } = useFormReturn;
  const isConfirmation = step == '2b' || step == '2c';

  const handleNext = (step) => {
    router.push(`/subventions/?step=${step}`, undefined, { shallow: true });
  };

  const onSubmit = (formData: SubventionFormInput) => {
    const { projectType, benefit } = formData;
    if (step == '2a') {
      if (projectType || benefit) {
        handleNext('2b');
      } else {
        handleNext('2c');
      }
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
        {step == '2a' ? (
          <Step2A {...useFormReturn} />
        ) : step == '2b' ? (
          <StepConfirmation variant="2b" {...useFormReturn} />
        ) : (
          <StepConfirmation variant="2c" {...useFormReturn} />
        )}
      </form>
      {isConfirmation && <ContactForm className="mt-24" />}
    </div>
  );
};

index.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault variant="third">{page}</LayoutDefault>;
};
export default index;
