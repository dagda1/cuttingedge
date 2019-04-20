import React from 'react';
import { Heading, Button, ButtonStyle } from '@cutting/component-library';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';
import { withFormik, FormikProps } from 'formik';
import { ConnectedFormInput } from '../src/components/FormWrappers/FormControlWrapper';
import { LayoutType } from '@cutting/component-library/src/components';

require('./App.scss');

export interface WeatherState {
  city: string;
}

const MyForm: React.FunctionComponent<FormikProps<WeatherState>> = (props) => {
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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppProps {}
export interface AppState {
  modalOpen: boolean;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      modalOpen: false
    };
  }

  openModal = (open: boolean) => this.setState({ modalOpen: open });

  render() {
    return (
      <Wrap>
        <Layout>
          <GelItem>
            <Heading>Weather</Heading>
          </GelItem>
        </Layout>
        <Layout>
          <GelItem m="1/2">
            <MyEnhancedForm />
          </GelItem>
        </Layout>
      </Wrap>
    );
  }
}
