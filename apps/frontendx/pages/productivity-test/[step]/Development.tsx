import { Testimonial } from '../../../components/Testimonial/Testimonial';
import { YesNo } from '../../../components/FormComponents/FormComponents';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { FormValues, StepComponent } from '../../../types';
import { Questions } from '../../../types';
import { useRouter } from 'next/router';
import { useStateMachine } from 'little-state-machine';
import { updateHealthcheck } from '../../../state/updateHealthcheck';
import { TextLink } from '@cutting/component-library';
import { VideoPlayer } from '../../../components/VideoPlayer/VideoPlayer';

export function Development({ nextPage, children }: StepComponent): JSX.Element {
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
        <p>
          By working on developer experience, you work on increasing your team&apos;s morale, productivity, speed, and
          engagement.
        </p>
        <p>
          Our definition of developer experience is to remove all the external tasks that stop developers working on
          features.
        </p>
      </Testimonial>
      <p>
        One survey found that developers only{' '}
        <TextLink external href="https://services.google.com/fh/files/misc/state-of-devops-2018.pdf">
          spent 30-40%
        </TextLink>{' '}
        of their time on feature development.
      </p>
      <p>
        Improving the overall developer experience is essential to increasing your team&apos;s productivity and morale.
      </p>
      <p>Once developers are free from hidden friction, they are free to work 100% on features.</p>
      <h2>Examples of what we look for are:</h2>
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <YesNo
          errors={errors}
          {...register('feedback', { required: true })}
          setValue={setValue}
          value={values.feedback ?? state.healthcheck.feedback}
          label={Questions.feedback.text}
          defaultValue={state.healthcheck.feedback}
        >
          <VideoPlayer file={Questions.feedback.video} />
        </YesNo>
        <YesNo
          errors={errors}
          {...register('componentLibrary', { required: true })}
          setValue={setValue}
          value={values.componentLibrary ?? state.healthcheck.componentLibrary}
          label={Questions.componentLibrary.text}
          defaultValue={state.healthcheck.componentLibrary}
        >
          <VideoPlayer file={Questions.componentLibrary.video} />
        </YesNo>

        {children}
      </form>
    </div>
  );
}

export default Development;
