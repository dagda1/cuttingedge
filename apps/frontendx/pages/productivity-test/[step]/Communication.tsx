import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { StepComponent, FormValues } from '../../../types';
import { Questions } from '../../../types';
import { YesNo } from '../../../components/FormComponents/FormComponents';
import { useRouter } from 'next/router';
import { useStateMachine } from 'little-state-machine';
import { updateHealthcheck } from '../../../state/updateHealthcheck';
import { Testimonial } from '../../../components/Testimonial/Testimonial';
import { VideoPlayer } from '../../../components/VideoPlayer/VideoPlayer';

export function Communication({ nextPage, children }: StepComponent): JSX.Element {
  const router = useRouter();
  const { actions, state } = useStateMachine({ updateHealthcheck });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useForm<FormValues>({ reValidateMode: 'onBlur' });

  const onSubmit: SubmitHandler<FormValues> = (formValues) => {
    actions.updateHealthcheck(formValues);
    router.push('/productivity-test/[step]', nextPage);
  };

  const values = getValues();

  return (
    <div>
      <Testimonial>
        <p>Only when all ambiguity and vagueness is 100% irradicated, is a task is ready to start.</p>
      </Testimonial>

      <p>
        When you work with us, we have a scorched earth policy towards ambiguity and vagueness. We can show you how to
        iterate the initial UI development without wasting precious development time.
      </p>

      <h2>Examples of what we look for are:</h2>
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <YesNo
          errors={errors}
          {...register('wireframe', { required: true })}
          setValue={setValue}
          value={values.wireframe ?? state.healthcheck.wireframe}
          label={Questions.wireframe.text}
          defaultValue={state.healthcheck.wireframe}
        >
          <VideoPlayer file={Questions.wireframe.video} />
        </YesNo>

        <YesNo
          errors={errors}
          {...register('ticketTemplate', { required: true })}
          setValue={setValue}
          value={values.ticketTemplate ?? state.healthcheck.ticketTemplate}
          label={Questions.ticketTemplate.text}
          defaultValue={state.healthcheck.ticketTemplate}
        >
          <VideoPlayer file={Questions.ticketTemplate.video} />
        </YesNo>
        {children}
      </form>
    </div>
  );
}

export default Communication;
