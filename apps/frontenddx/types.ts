import type { ReactNode } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import type { ReadTimeResults } from 'reading-time';

export type YesNoValue = 'yes' | 'no';

export interface FormValues {
  ticketTemplate?: YesNoValue;
  wireframe?: YesNoValue;
  bugEnvironment?: YesNoValue;
  mocking?: YesNoValue;
  release?: YesNoValue;
  gitHook?: YesNoValue;
  performance?: YesNoValue;
  atLeastOneEndToEnd?: YesNoValue;
  componentLibrary?: YesNoValue;
  feedback?: YesNoValue;
}

export interface Post {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mdxSource: any;
  frontMatter: {
    slug: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
    readingTime: ReadTimeResults;
    fileName: string;
  };
}

export const Questions: Record<keyof FormValues, { text: string; video: string }> = {
  ticketTemplate: {
    text: 'Do you have a new ticket template that ensures EVERY NEW work item is clearly defined in the same terms?',
    video: 'template.mp4',
  },
  wireframe: {
    text: 'Do you use a good wireframing tool that requires NO DEVELOPER assistance to mock up a new UI?',
    video: 'wireframe.mp4',
  },
  bugEnvironment: {
    text: `Is it easy to spin up a LOCAL development environment ON THE DEV's machine with the exact version of the code that has the bug?`,
    video: 'environment.mp4',
  },
  mocking: {
    text: 'Can you easily mock the parts of your application that you do not control like authentication or APIs?',
    video: 'mocking.mp4',
  },
  release: {
    text: 'Do you have a release formula with no manual steps?',
    video: 'releasing.mp4',
  },
  performance: {
    text: 'Do you record performance metrics and does your CI build fail if performance falls below an agreed threshold?',
    video: 'performance.mp4',
  },
  gitHook: {
    text: 'Do you have automatic checks that run before a developer pushes any code to the source control repository?',
    video: 'git_hook.mp4',
  },
  atLeastOneEndToEnd: {
    text: 'Do you have at least one end to end test that tests the most critical functionality on each deploy?',
    video: 'e2e.mp4',
  },
  componentLibrary: {
    text: 'Can your team easily create responsive web pages that look great on mobile, tablet and desktop devices with minimal styling?',
    video: 'ui-elements2.mp4',
  },
  feedback: {
    text: 'Do your developers get constant feedback from their environment to alert them early of errors?',
    video: 'eslint2.mp4',
  },
} as const;

export type Errors = Pick<UseFormReturn<FormValues>, 'formState'>['formState']['errors'];

export interface StepComponent {
  nextPage?: string;
  children?: ReactNode;
}
