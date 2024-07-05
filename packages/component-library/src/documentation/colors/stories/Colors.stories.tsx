import type { Meta } from '@storybook/react';

import { themedSelect, themedTemplateMaker } from '~/components/stories/Stories';
import { vars } from '~/style/themes/vars.css';

import * as styles from './Colors.css';

function ColorList() {
  return (
    <div>
      {Object.entries(vars.foregroundColor).map(([key, value]) => (
        <div key={key} className={styles.container}>
          <div className={styles.color} style={{ background: value as string }}></div>
          <div>{key}</div>
        </div>
      ))}
    </div>
  );
}

const Template = themedTemplateMaker(ColorList);

export const Colors = Template.bind({});

export default {
  title: 'Colors',
  component: ColorList,
  argTypes: {
    ...themedSelect(),
  },
} as Meta<typeof ColorList>;
