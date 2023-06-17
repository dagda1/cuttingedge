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

export function Bugs({ nextPage, children }: StepComponent): JSX.Element {
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
        <p>Some estimates claim developers can spend as much as 75% of their time fixing bugs.</p>
        <p>Our mission is to fix bugs before they happen.</p>
      </Testimonial>

      <p>
        The hidden cost of dealing with bugs is enormous. Whole days are lost as people from many different teams are
        sucked into the reporting, tracking, recreating and resolution process.
      </p>

      <p>
        Being able to spin up a development environment with the exact same versions of the code that caused the bug
        will save a lot of time and money.
      </p>

      <p>
        Being able to mock out large parts of the code like authentication and 3rd party APIs are just two things we use
        to slash the time it takes to fix a bug.
      </p>

      <h2>Examples of what we look for are:</h2>

      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <YesNo
          {...register('bugEnvironment', { required: true })}
          setValue={setValue}
          label={Questions.bugEnvironment.text}
          errors={errors}
          value={values.bugEnvironment ?? state.healthcheck.bugEnvironment}
          defaultValue={state.healthcheck.bugEnvironment}
        >
          <VideoPlayer file={Questions.bugEnvironment.video} />
        </YesNo>

        <YesNo
          {...register('mocking', { required: true })}
          setValue={setValue}
          label={Questions.mocking.text}
          errors={errors}
          value={values.mocking ?? state.healthcheck.mocking}
          defaultValue={state.healthcheck.mocking}
        >
          <VideoPlayer file={Questions.mocking.video} />
        </YesNo>

        {children}
      </form>
    </div>
  );
}

export default Bugs;
