import { assert } from '@cutting/assert';
import type { ButtonStyle } from '@cutting/component-library';
import { Box, Button } from '@cutting/component-library';
import { useRef } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { CRM } from '../../constants';
import { Input, TextArea } from '../FormComponents/FormComponents';
import * as styles from './ContactForm.css';
import { useFormContext } from './FormContext';

interface FormValues {
  email: string;
  message: string;
  buttonStyle?: ButtonStyle;
}

export function ContactForm({ buttonStyle = 'primary' }: Pick<FormValues, 'buttonStyle'>): JSX.Element {
  const formContext = useFormContext();

  const { returnUrl } = formContext;
  const form = useRef<HTMLFormElement>(null);
  const botChecker = useRef<HTMLInputElement>(null);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({ reValidateMode: 'onBlur' });

  const onSubmit: SubmitHandler<FormValues> = (data, event) => {
    assert(!!form?.current, `no active form in submitHandler`);
    assert(!!botChecker.current, `no botChecker`);
    assert(botChecker.current.value === '', `intruderbot alert!!!!`);

    const formData = new FormData(event?.target);

    fetch(CRM, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(() => {
        assert(!!returnUrl, `no returnUrl`);

        location.href = returnUrl;
      })
      .catch((error) => {
        console.error(error);
      });

    // form.current.action = CRM;
    // form.current.submit();
  };

  return (
    <Box width="full" className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} method="POST" ref={form} noValidate>
        <fieldset>
          <Input
            maxLength={250}
            name="email"
            rules={{
              required: 'Email is required',
              minLength: { value: 3, message: 'Must have at least 3 characters' },
              maxLength: { value: 250, message: 'maxiumum 250 characters' },
            }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            control={control as any}
            label="What's your email"
            required
            errors={errors}
          />

          <TextArea
            name="message"
            rules={{
              required: 'Description is required',
              minLength: { value: 3, message: 'Must have at least 3 characters' },
              maxLength: { value: 250, message: 'maxiumum 250 characters' },
            }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            control={control as any}
            label="How can we help you"
            rows={3}
            required
            errors={errors}
          />
          <div className={styles.buttonContainer}>
            <Button type="submit" buttonStyle={buttonStyle}>
              Send
            </Button>
          </div>
        </fieldset>
        <input ref={botChecker} type="hidden" name="zc_gad" id="zc_gad" value=""></input>
      </form>
    </Box>
  );
}
