import * as styles from '../../../styles/Report.css';
import type { FormValues, YesNoValue } from '../../../types';
import { Questions } from '../../../types';
import { useStateMachine } from 'little-state-machine';
import { updateHealthcheck } from '../../../state/updateHealthcheck';
import { Button, Donut } from '@cutting/component-library';
import { useState } from 'react';
import { VideoSlideDown } from '../../../components/VideoSlideDown/VideoSlideDown';
import { VideoPlayer } from '../../../components/VideoPlayer/VideoPlayer';

function Question({ question }: { question: keyof FormValues }): JSX.Element {
  const [open, setOpen] = useState<boolean>();

  return (
    <div className={styles.noAnswer}>
      <h3>{Questions[question].text}</h3>
      {!open && (
        <Button buttonStyle="secondary" onClick={() => setOpen(true)}>
          SHOW ADVICE
        </Button>
      )}
      {open && (
        <>
          <Button buttonStyle="warning" onClick={() => setOpen(false)}>
            CLOSE
          </Button>
          <VideoSlideDown open={open}>
            <VideoPlayer file={Questions[question].video} />
          </VideoSlideDown>
          <Button buttonStyle="warning" onClick={() => setOpen(false)}>
            CLOSE
          </Button>
        </>
      )}
    </div>
  );
}

export function Report(): JSX.Element {
  const { state } = useStateMachine({ updateHealthcheck });

  const numberOfQuestions = Object.keys(state.healthcheck).length;

  const yesAnswers = Object.entries(state.healthcheck).flatMap(([k, v]: [string, YesNoValue]) =>
    v === 'yes' ? [k] : [],
  );

  const score = Math.ceil((yesAnswers.length / numberOfQuestions) * 100);

  const noAnswers = Object.entries(state.healthcheck).flatMap(([k, v]: [string, YesNoValue]) =>
    v === 'no' ? [k] : [],
  );

  return (
    <div className={styles.root}>
      <div className={styles.donut}>
        <div>
          <h2>You scored</h2>
        </div>
        <Donut score={score} />
      </div>
      <div>
        <h2>Arrange a no obligation call or email us to find out more.</h2>
        <VideoSlideDown open={true}>
          <></>
        </VideoSlideDown>
      </div>
      <hr />
      {noAnswers.length > 0 && (
        <div className={styles.wrongAnswers}>
          <h2>You answered no to the following questions:</h2>
          {noAnswers.map((question) => (
            <Question key={question} question={question as keyof FormValues} />
          ))}
        </div>
      )}
      <hr />
      {yesAnswers.length > 0 && (
        <div className={styles.wrongAnswers}>
          <h2>You answered yes to the following questions:</h2>
          {yesAnswers.map((question) => (
            <Question key={question} question={question as keyof FormValues} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Report;
