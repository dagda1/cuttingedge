import * as styles from './SignupForm.css';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Input } from '../FormComponents/FormComponents';
import { useRef } from 'react';
import { assert } from 'assert-ts';
import { NEWSLETTER } from '../../constants';
import { Button } from '@cutting/component-library';

interface FormValues {
  FIRSTNAME: string;
  CONTACT_EMAIL: string;
  submitType: 'optinCustomView';
  emailReportId: '';
  formType: 'QuickForm';
  zx: '14accd9c53';
  zcvers: '2.0';
  oldListIds: '';
  mode: 'OptinCreateView';
  zcld: '1137292f1802e29b';
  zctd: '';
  zc_trackCode: 'ZCFORMVIEW';
  zc_formIx: '3zcda2ee376f0ec8efdb6f9dd531a3ba652c86022d26b58c00dda10bdd91f6b92f';
  document_domain: '';
}

export function SignupForm(): JSX.Element {
  const form = useRef<HTMLFormElement>(null);
  const botChecker = useRef<HTMLInputElement>(null);

  const { register, handleSubmit } = useForm<FormValues>({ reValidateMode: 'onBlur' });

  const onSubmit: SubmitHandler<FormValues> = () => {
    assert(!!form?.current, `no active form in submitHandler`);
    assert(!!botChecker.current, `no botChecker`);
    assert(botChecker.current.value === '', `someone has set the bot!!!!`);

    form.current.action = NEWSLETTER;
    form.current.submit();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} method="POST" ref={form} name="SignupForm">
        <fieldset>
          <Input
            maxLength={250}
            {...register('FIRSTNAME', { required: true, minLength: 3, maxLength: 80 })}
            label="First Name"
            required
          />
          <Input
            maxLength={250}
            {...register('CONTACT_EMAIL', { required: true, minLength: 3, maxLength: 100 })}
            label="Email"
            type="email"
            required
          />

          <div className={styles.buttonContainer}>
            <Button type="submit">Send</Button>
          </div>
        </fieldset>
        <input ref={botChecker} type="hidden" id="zc_gad" value="" />
        <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
        <input type="hidden" id="emailReportId" name="emailReportId" value="" />
        <input type="hidden" id="formType" name="formType" value="QuickForm" />
        <input type="hidden" name="zx" id="cmpZuid" value="14accd9c53" />
        <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
        <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
        <input type="hidden" id="zcld" name="zcld" value="1137292f1802e29b" />
        <input type="hidden" id="zctd" name="zctd" value="1137292f180357cf" />
        <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
        <input type="hidden" id="scriptless" name="scriptless" value="yes" />
        <input
          type="hidden"
          id="zc_formIx"
          name="zc_formIx"
          value="3ze5729e86886ecde4d99379728dd24ebe54cdf8d5bda2b2dd78eae44df5bf16fe"
        />
      </form>
    </div>
  );
}
