export interface Post {
  title: string;
  summary: string;
  link: string;
}

// tslint:disable
export const posts: Post[] = [
  {
    title: 'Code splitting with typescript, webpack and React lazy',
    summary:
      'I am writing this because everytime I have to set up code splitting with typescript, webpack and React, I forget how I did it last time and…',
    link: 'https://thesoftwaresimpleton.com/blog/2019/03/15/ts-code-splitting'
  },
  {
    title: 'typescript - excess property checks and return type widening',
    summary:
      'The title of this post would not have meant anything to me 24 hours ago until I came across a scenario that I am surprised I have not come…',
    link: 'https://thesoftwaresimpleton.com/blog/2019/03/03/return-body-ts'
  },
  {
    title: 'React hooks and closures, there may be dragons',
    summary:
      'The title of this post would not have meant anything to me 24 hours ago until I came across a scenario that I am surprised I have not come…',
    link: 'https://thesoftwaresimpleton.com/blog/2019/02/09/hooks'
  },
  {
    title: "Down the rabbit hole with typescript's mapped and lookup types",
    summary: 'Two of the more abstract concepts in typescript are mapped types and lookup types.',
    link: 'https://thesoftwaresimpleton.com/blog/2018/12/14/mapped-types'
  },
  {
    title: 'SVG transformations with affine matrices',
    summary:
      'I recently had a requirement to add zooming and panning to an svg image. Panning and zooming are popular interaction techniques which let…',
    link: 'https://thesoftwaresimpleton.com/blog/2018/09/25/affine-matrix'
  },
  {
    title: 'Narrowing a union type in typescript and a gotcha with callbacks',
    summary:
      'Narrowing a union type In typescript, a union type describes a value that can be one of several types separated by the vertical bar, for…',
    link: 'https://thesoftwaresimpleton.com/blog/2018/08/31/narrow-union-type'
  },
  {
    title: 'Creating an Accessible React Website',
    summary:
      "I've recently been working on an online application form in the form of a multistep wizard that had strict accessibility requirements. I've never worked on a project with such strict requirements before. I've also heard rumblings that it was not possible to make a SPA accessible. It turns out that there is not that much work involved in making your site accessible and I am going to ensure that any work I do from now on has an accessible first approach. I'm now going to outline in no particular order what I have learned over the past few months.",
    link: 'https://thesoftwaresimpleton.com/blog/2017/11/05/accessible-react/'
  },
  {
    title: 'Animating a Sine Wave With d3.js and MathJax',
    summary:
      'I have spent the last year learning some of the maths I should have learned about 27 years ago. One of the things that I have found interesting while learning maths is the relationship between the unit circle and a sine wave graph of y = sin(x).',
    link: 'https://thesoftwaresimpleton.com/blog/2016/05/25/sine-wave/'
  }
];
