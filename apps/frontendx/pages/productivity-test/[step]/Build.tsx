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
import { Heading } from '@cutting/component-library';
import { Text } from '@cutting/component-library';

export function Build({ nextPage, children }: StepComponent): JSX.Element {
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
          An effective workflow will make your good developers great and your great ones exceptional, while a bad
          workflow will compromise even your best engineer’s productivity.
        </Text>
      </Testimonial>

      <Text component="p">
        We believe everything starts with continuous integration. When a developer merges a feature branch back into the
        main branch, the building, versioning, and automated testing should occur without any manual intervention.{' '}
      </Text>
      <Text component="p">
        We believe in reproducible and predictable builds that are automated with the correct tooling.
      </Text>

      <Heading level="2">Examples of what we look for are:</Heading>
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <YesNo
          errors={errors}
          {...register('release', { required: true })}
          setValue={setValue}
          value={values.release ?? state.healthcheck.release}
          label={Questions.release.text}
          defaultValue={state.healthcheck.release}
        >
          <VideoPlayer file={Questions.release.video} />
        </YesNo>

        <YesNo
          errors={errors}
          {...register('performance', { required: true })}
          setValue={setValue}
          value={values.performance ?? state.healthcheck.performance}
          label={Questions.performance.text}
          defaultValue={state.healthcheck.performance}
        >
          <VideoPlayer file={Questions.performance.video} />
        </YesNo>

        <YesNo
          errors={errors}
          {...register('gitHook', { required: true })}
          setValue={setValue}
          value={values.gitHook ?? state.healthcheck.gitHook}
          label={Questions.gitHook.text}
          defaultValue={state.healthcheck.gitHook}
        >
          <VideoPlayer file={Questions.gitHook.video} />
        </YesNo>

        {children}
      </form>
    </div>
  );
}

export default Build;
