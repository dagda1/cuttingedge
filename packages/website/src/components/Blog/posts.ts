export interface Post {
  title: string;
  summary: string;
  link: string;
}

// tslint:disable
export const posts: Post[] = [
  {
    title: "Down the rabbit hole with typescript's mapped and lookup types",
    summary: 'Two of the more abstract concepts in typescript are mapped types and lookup types.',
    link: 'https://thesoftwaresimpleton.com/blog/2018/12/14/mapped-types'
  },
  {
    title: 'SVG transformations with affine matrices',
    summary:
      'I recently had a requirement to add zooming and panning to an svg image. Panning and zooming are popular interaction techniques which let the user focus on a region of interest by restricting the view. The obvious choice was to use d3-zoom but as react is rendering the svg content, D3 is a bit of a bad fit as it mutates the DOM directly. I somehow ended up using affine matrices to compute the transformations.',
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
