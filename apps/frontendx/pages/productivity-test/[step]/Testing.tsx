import { Testimonial } from '../../../components/Testimonial/Testimonial';
import { YesNo } from '../../../components/FormComponents/FormComponents';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { FormValues, StepComponent } from '../../../types';
import { Questions } from '../../../types';
import { useRouter } from 'next/router';
import { useStateMachine } from 'little-state-machine';
import { updateHealthcheck } from '../../../state/updateHealthcheck';
import { VideoPlayer } from '../../../components/VideoPlayer/VideoPlayer';
import { Heading, Text } from '@cutting/component-library';

export function Testing({ nextPage, children }: StepComponent): JSX.Element {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useForm<FormValues>({ reValidateMode: 'onBlur' });
  const { actions, state } = useStateMachine({ updateHealthcheck });

  const onSubmit: SubmitHandler<FormValues> = (formValues) => {
    actions.updateHealthcheck(formValues);
    router.push('/productivity-test/[step]', nextPage);
  };

  const values = getValues();

  return (
    <div>
      <Testimonial>
        <Text component="p">
          Software Testing Saves Money, if bugs are caught in the earlier stages it costs much less to fix them. That is
          why it’s important to get testing done as soon as possible.
        </Text>
      </Testimonial>
      <Text component="p">
        We firmly believe in preemptively fixing problems before they happen. We believe in giving developers constant
        feedback to alert them that something might be wrong....before it happens! Having the right tests in the right
        place is the foundation of robust software.
      </Text>
      <Heading level="2">Examples of what we look for are:</Heading>
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <YesNo
          errors={errors}
          {...register('atLeastOneEndToEnd', { required: true })}
          setValue={setValue}
          value={values.atLeastOneEndToEnd ?? state.healthcheck.atLeastOneEndToEnd}
          label={Questions.atLeastOneEndToEnd.text}
          defaultValue={state.healthcheck.atLeastOneEndToEnd}
        >
          <VideoPlayer file={Questions.atLeastOneEndToEnd.video} />
        </YesNo>
        {children}
      </form>
    </div>
  );
}

export default Testing;
