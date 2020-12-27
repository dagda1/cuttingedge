export interface Post {
  title: string;
  summary: string;
  link: string;
}

// eslint:disable
export const posts: Post[] = [
  {
    title: 'Put the TypeScript enums and booleans away',
    summary: 'How discriminated unions or algebraic data types are a better fit for modelling state',
    link: 'https://blog.logrocket.com/put-the-typescript-enums-and-booleans-away/',
  },
  {
    title: 'Act now to make your React website accessible',
    summary:
      'I do not care about the various WCAG 2.x standards. People use these standards as an excuse to do the bare minimum to make...',
    link: 'https://blog.logrocket.com/make-your-react-website-accessible/',
  },
  {
    title: 'Is typescript worth it?',
    summary:
      'I am, for the most part, a TypeScript fan but I do have some nagging doubts that I would like to discuss in this...',
    link: 'https://blog.logrocket.com/is-typescript-worth-it/',
  },
  {
    title: 'Automated testing is not working',
    summary: 'Many, many reasons why we are on the wrong tract',
    link: 'https://blog.logrocket.com/automated-testing-is-not-working/',
  },
  {
    title: 'Frustrations with React Hooks',
    summary:
      'While the response to Hooks has been overwhelmingly positive, we are going to look at some of the not so popular parts of React',
    link: 'https://blog.logrocket.com/frustrations-with-react-hooks/',
  },
  {
    title: 'Cypress.io: the Selenium killer',
    summary:
      'One of the main differences between cypress.io and selenium is that selenium executes in a process outside of the browser or device we are testing. Cypress executes in the browser and in the same run loop as the device under test.',
    link: 'https://blog.logrocket.com/cypress-io-the-selenium-killer/',
  },
  {
    title: 'const assertions are the killer new TypeScript feature',
    summary:
      'For my money, const assertions are the killer new feature of TypeScript 3.4 and as I will explain later, I can omit a lot of tedious type declarations using this new feature.',
    link: 'https://blog.logrocket.com/const-assertions-are-the-killer-new-typescript-feature-b73451f35802/',
  },
  {
    title: 'Code splitting with typescript, webpack and React lazy',
    summary:
      'I am writing this because everytime I have to set up code splitting with typescript, webpack and React, I forget how I did it last time and…',
    link: 'https://thesoftwaresimpleton.com/blog/2019/03/15/ts-code-splitting',
  },
  {
    title: 'typescript - excess property checks and return type widening',
    summary:
      'The title of this post would not have meant anything to me 24 hours ago until I came across a scenario that I am surprised I have not come…',
    link: 'https://thesoftwaresimpleton.com/blog/2019/03/03/return-body-ts',
  },
  {
    title: 'React hooks and closures, there may be dragons',
    summary:
      'The title of this post would not have meant anything to me 24 hours ago until I came across a scenario that I am surprised I have not come…',
    link: 'https://thesoftwaresimpleton.com/blog/2019/02/09/hooks',
  },
  {
    title: "Down the rabbit hole with typescript's mapped and lookup types",
    summary: 'Two of the more abstract concepts in typescript are mapped types and lookup types.',
    link: 'https://thesoftwaresimpleton.com/blog/2018/12/14/mapped-types',
  },
  {
    title: 'SVG transformations with affine matrices',
    summary:
      'I recently had a requirement to add zooming and panning to an svg image. Panning and zooming are popular interaction techniques which let…',
    link: 'https://thesoftwaresimpleton.com/blog/2018/09/25/affine-matrix',
  },
  {
    title: 'Narrowing a union type in typescript and a gotcha with callbacks',
    summary:
      'Narrowing a union type In typescript, a union type describes a value that can be one of several types separated by the vertical bar, for…',
    link: 'https://thesoftwaresimpleton.com/blog/2018/08/31/narrow-union-type',
  },
  {
    title: 'Creating an Accessible React Website',
    summary:
      "I've recently been working on an online application form in the form of a multistep wizard that had strict accessibility requirements. I've never worked on a project with such strict requirements before. I've also heard rumblings that it was not possible to make a SPA accessible. It turns out that there is not that much work involved in making your site accessible and I am going to ensure that any work I do from now on has an accessible first approach. I'm now going to outline in no particular order what I have learned over the past few months.",
    link: 'https://thesoftwaresimpleton.com/blog/2017/11/05/accessible-react/',
  },
  {
    title: 'Animating a Sine Wave With d3.js and MathJax',
    summary:
      'I have spent the last year learning some of the maths I should have learned about 27 years ago. One of the things that I have found interesting while learning maths is the relationship between the unit circle and a sine wave graph of y = sin(x).',
    link: 'https://thesoftwaresimpleton.com/blog/2016/05/25/sine-wave/',
  },
];
