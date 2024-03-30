import '@cutting/component-library/styles.css';
import { ApplicationLayout, Button } from '@cutting/component-library';
import { ContactButtons, Input } from '../../src';
import type { ReactNode } from 'react';
import { FormContextProvider } from '../../src/components/ContactForm/FormContext';
import { useForm } from 'react-hook-form';

const contactFomProps = {
  formName: 'WebToLeads397786000002563014',
  xnQsjsdp: '3c84483c277d4654a1b4c396d146b27715022726817867cc0082152855bd1c7f',
  xmIwtLD: '9844a94925d654edab46a3a8cdca457eb46b2226a1481d09780f2cb3d2b1dd4e',
  returnUrl: '/',
};

function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ApplicationLayout heading="@cutting/react-hook-form-components" theme="supportTheme">
      <FormContextProvider {...contactFomProps}>{children}</FormContextProvider>
    </ApplicationLayout>
  );
}

export function App(): JSX.Element {
  const {
    register,
    formState: { errors },
    control,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useForm<any>({
    reValidateMode: 'onBlur',
    defaultValues: { expression: '' },
  });

  return (
    <Layout>
      <ContactButtons callType="rescue" />

      <form method="POST" name="SignupForm" noValidate>
        <Input
          layout="horizontal"
          {...register('expression', {
            required: 'expression is required',
            minLength: { value: 3, message: 'min length' },
            maxLength: { value: 250, message: 'expression exceeded 250 characters' },
          })}
          label="Expression"
          errors={errors}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          control={control as any}
        />
        <Button type="submit">Evaluate</Button>
      </form>
    </Layout>
  );
}
