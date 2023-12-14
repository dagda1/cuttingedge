import * as styles from './ContactForm.css.js';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Input, TextArea } from '../FormComponents/FormComponents.js';
import { useRef } from 'react';
import { assert } from 'assert-ts';
import { CRM } from '../../constants.js';
import type { ButtonStyle } from '@cutting/component-library';
import { Box, Button } from '@cutting/component-library';
import { useFormContext } from './FormContext.js';

interface FormValues {
  'Last Name': string;
  Company: string;
  Email: string;
  Description: string;
  buttonStyle?: ButtonStyle;
}

export function ContactForm({ buttonStyle = 'primary' }: Pick<FormValues, 'buttonStyle'>): JSX.Element {
  const formContext = useFormContext();

  const { formName, xnQsjsdp, xmIwtLD, returnUrl } = formContext;

  const form = useRef<HTMLFormElement>(null);
  const botChecker = useRef<HTMLInputElement>(null);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({ reValidateMode: 'onBlur' });

  const onSubmit: SubmitHandler<FormValues> = () => {
    assert(!!form?.current, `no active form in submitHandler`);
    assert(!!botChecker.current, `no botChecker`);
    assert(botChecker.current.value === '', `intruderbot alert!!!!`);

    form.current.action = CRM;
    form.current.submit();
  };

  return (
    <Box width="full" className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} name={formName} method="POST" ref={form} noValidate>
        <fieldset>
          <Input
            name="Last Name"
            rules={{
              required: 'Last name is required',
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
            name="Email"
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

          <Input
            name="Company"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            control={control as any}
            rules={{
              minLength: { value: 3, message: 'Must have at least 3 characters' },
              maxLength: { value: 250, message: 'maxiumum 250 characters' },
            }}
            label="Which Company"
            errors={errors}
          />

          <TextArea
            name="Description"
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
        <input type="text" style={{ display: 'none' }} name="xnQsjsdp" defaultValue={xnQsjsdp}></input>
        <input ref={botChecker} type="hidden" name="zc_gad" id="zc_gad" value=""></input>
        <input type="text" style={{ display: 'none' }} name="xmIwtLD" defaultValue={xmIwtLD}></input>
        <input type="text" style={{ display: 'none' }} name="actionType" defaultValue="TGVhZHM="></input>
        <input type="text" style={{ display: 'none' }} name="returnURL" defaultValue={returnUrl ?? '/'}></input>
      </form>
    </Box>
  );
}
