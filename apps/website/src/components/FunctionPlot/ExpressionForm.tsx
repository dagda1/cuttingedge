import { memo } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { MathJax } from '@cutting/use-mathjax';
import { Input } from '@cutting/react-hook-form-components';
import { parse } from 'mathjs';
import { Button } from '@cutting/component-library';
import * as styles from './ExpressionForm.css';
import { algebra, form } from './FunctionPlot.css';

export interface FormValues {
  expression: string;
}

interface FormProps {
  onSubmit: SubmitHandler<FormValues>;
  expression: string;
}

function Form({ onSubmit, expression }: FormProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    reValidateMode: 'onBlur',
    defaultValues: { expression },
  });

  return (
    <div className={form}>
      <form onSubmit={handleSubmit(onSubmit)} method="POST" name="SignupForm" noValidate>
        <MathJax className={styles.expression}>{`$ f(x) = ${parse(expression).toTex()}$`}</MathJax>
        <fieldset className={algebra}>
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
        </fieldset>
      </form>
    </div>
  );
}

export const ExpressionForm = memo(Form);
