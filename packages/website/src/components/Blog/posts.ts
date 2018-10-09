export interface Post {
  title: string;
  summary: string;
  link: string;
}

// tslint:disable
export const posts: Post[] = [
  {
    title: 'React polygon component',
    summary:
      'I am writing this because I could not find anything adequate in my interweb searches for how to draw a hexagon using a svg polygon What I…',
    link: 'https://thesoftwaresimpleton.com/blog/2018/09/06/hexagon'
  },
  {
    title: 'Narrowing a union type in typescript and a gotcha with callbacks',
    summary:
      'Narrowing a union type In typescript, a union type describes a value that can be one of several types separated by the vertical bar, for…',
    link: 'https://thesoftwaresimpleton.com/blog/2018/08/31/narrow-union-type.md'
  },
  {
    title: 'Higher Kinded Types in Typescript',
    summary:
      'Higher kinded types are not currently possible in typescript but first of all let’s explain why they exist.',
    link: 'https://thesoftwaresimpleton.com/blog/2018/04/14/higher-kinded-types/'
  },
  {
    title: 'Creating an Accessible React Website',
    summary:
      "I've recently been working on an online application form in the form of a multistep wizard that had strict accessibility requirements. I've never worked on a project with such strict requirements before. I've also heard rumblings that it was not possible to make a SPA accessible. It turns out that there is not that much work involved in making your site accessible and I am going to ensure that any work I do from now on has an accessible first approach. I'm now going to outline in no particular order what I have learned over the past few months.",
    link: 'https://thesoftwaresimpleton.com/blog/2017/11/05/accessible-react/'
  },
  {
    title: 'Streams and Async Await in Nodejs',
    summary:
      'Dealing with asynchronicity in nodejs has been a challenge from day one due to its non blocking nature. The evolution has been slow and the node world has moved from callback hell to promises and from promises to generators.',
    link: 'https://thesoftwaresimpleton.com/blog/2016/09/10/async-await/'
  },
  {
    title: 'Animating a Sine Wave With d3.js and MathJax',
    summary:
      'I have spent the last year learning some of the maths I should have learned about 27 years ago. One of the things that I have found interesting while learning maths is the relationship between the unit circle and a sine wave graph of y = sin(x).',
    link: 'https://thesoftwaresimpleton.com/blog/2016/05/25/sine-wave/'
  }
];
