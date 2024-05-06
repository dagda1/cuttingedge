import * as styles from './ContactForm.css';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Input, TextArea } from '../FormComponents/FormComponents';
import { useRef } from 'react';
import { assert } from '@cutting/assert';
import { CRM } from '../../constants';
import type { ButtonStyle } from '@cutting/component-library';
import { Box, Button } from '@cutting/component-library';
import { useFormContext } from './FormContext';

interface FormValues {
  'entry.200810880': string;
  'entry.1583339514': string;
  'entry.345343614': string;
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    assert(!!form?.current, `no active form in submitHandler`);
    assert(!!botChecker.current, `no botChecker`);
    assert(botChecker.current.value === '', `intruderbot alert!!!!`);

    const formData = new URLSearchParams();

    for (const [key, value] of Object.entries(data.entry)) {
      console.log({ key, value });
      formData.append(`entry.${key}`, value as string);
    }

    console.log(formData);

    fetch(CRM, {
      method: 'POST',
      body: formData.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(() => {
        assert(!!returnUrl, `no returnUrl`);

        location.href = returnUrl;
      })
      .catch((error) => {
        console.error(error);
        assert(!!returnUrl, `no returnUrl`);

        location.href = returnUrl;
      });
    // form.current.action = CRM;
    // form.current.submit();
  };

  return (
    <Box width="full" className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} method="POST" ref={form} noValidate>
        <fieldset>
          <Input
            name="entry.200810880"
            rules={{
              required: 'Name is required',
              minLength: { value: 3, message: 'Must have at least 3 characters' },
              maxLength: { value: 250, message: 'maxiumum 250 characters' },
            }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            control={control as any}
            label="What's your name"
            errorMessage="Last Name is required"
            required
            errors={errors}
          />
          <Input
            maxLength={250}
            name="entry.1583339514"
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
            name="entry.345343614"
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
