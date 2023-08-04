import * as styles from './ContactForm.css';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Input, TextArea } from '../FormComponents/FormComponents';
import { useRef } from 'react';
import { assert } from 'assert-ts';
import { CRM } from '../../constants';
import type { ButtonStyle } from '@cutting/component-library';
import { Box, Button } from '@cutting/component-library';

interface FormValues {
  'Last Name': string;
  Company: string;
  Email: string;
  Description: string;
  xnQsjsdp: string;
  xmIwtLD: string;
  returnUrl: string;
}

export type ContactFormProps = {
  buttonStyle?: ButtonStyle;
  returnUrl?: string;
  formName: string;
} & Pick<FormValues, 'xmIwtLD' | 'xnQsjsdp'>;

export function ContactForm({
  returnUrl,
  xmIwtLD,
  xnQsjsdp,
  formName,
  buttonStyle = 'primary',
}: ContactFormProps): JSX.Element {
  const form = useRef<HTMLFormElement>(null);
  const botChecker = useRef<HTMLInputElement>(null);

  const { register, handleSubmit } = useForm<FormValues>({ reValidateMode: 'onBlur' });

  const onSubmit: SubmitHandler<FormValues> = () => {
    assert(!!form?.current, `no active form in submitHandler`);
    assert(!!botChecker.current, `no botChecker`);
    assert(botChecker.current.value === '', `someone has set the bot!!!!`);

    form.current.action = CRM;
    form.current.submit();
  };

  return (
    <Box width="full" className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} name={formName} method="POST" ref={form}>
        <fieldset>
          <Input
            maxLength={250}
            {...register('Last Name', { required: true, minLength: 3, maxLength: 250 })}
            label="What's your name"
            required
          />
          <Input
            maxLength={250}
            {...register('Email', { required: true, minLength: 3, maxLength: 250 })}
            label="What's your email"
            type="email"
            required
          />

          <Input
            maxLength={250}
            {...register('Company', { required: false, minLength: 3, maxLength: 250 })}
            label="Which Company"
          />

          <TextArea
            maxLength={250}
            {...register('Description', { required: true, minLength: 3, maxLength: 250 })}
            label="How can we help you"
            rows={3}
            required
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
        <input
          type="text"
          style={{ display: 'none' }}
          name="returnURL"
          defaultValue={returnUrl ?? typeof location !== 'undefined' ? location.origin : '/'}
        ></input>
      </form>
    </Box>
  );
}
