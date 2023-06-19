import { Testimonial } from '../../../components/Testimonial/Testimonial';
import type { StepComponent } from '../../../types';
import * as styles from '../../../styles/ProductivityTest.css';
import cs from 'classnames';
import { VideoPlayer } from '../../../components/VideoPlayer/VideoPlayer';

export function Intro({ children }: StepComponent): JSX.Element {
  return (
    <div className={cs(styles.root, styles.introRoot)}>
      <div>
        <Testimonial>
          Developer productivity is not measured in how many lines of code are written or tracking hours worked against
          a JIRA or work item ticket.
        </Testimonial>
        <div>
          <VideoPlayer file="intro.mp4" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Intro;
