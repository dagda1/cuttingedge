import React from 'react';
import { Heading, Button, ButtonStyle, LayoutType } from '@cutting/component-library';
import { withFormik, FormikProps } from 'formik';
import { ConnectedFormInput } from '../src/components/FormWrappers/FormControlWrapper';

const styles = require('./App.module.scss');

export interface WeatherState {
  city: string;
}

const MyForm: React.FC<FormikProps<WeatherState>> = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <ConnectedFormInput {...props} name="city" label="city" layoutType={LayoutType.horizontal} />
      <Button type="submit" buttonStyle={ButtonStyle.Primary}>
        Submit
      </Button>
    </form>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ city: '' }),

  // Custom sync validation
  validate: (values) => {
    const errors: Partial<WeatherState> = {};

    if (!values.city) {
      errors.city = 'Required';
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  },

  displayName: 'BasicForm'
})(MyForm);

export const App: React.FC = () => (
  <div className={styles.wrap}>
    <div className={styles.layout}>
      <div className={styles.item}>
        <Heading>Weather</Heading>
      </div>
    </div>
    <div className={styles.layout}>
      <div className={styles.item}>
        <MyEnhancedForm />
      </div>
    </div>
  </div>
);

export default App;
