export interface Post {
  title: string;
  summary: string;
  link: string;
}

export const posts: Post[] = [
  {
    title: 'Creating an Accessible React Website',
    summary:
      "I've recently been working on an online application form in the form of a multistep wizard that had strict accessibility requirements. I've never worked on a project with such strict requirements before. I've also heard rumblings that it was not possible to make a SPA accessible. It turns out that there is not that much work involved in making your site accessible and I am going to ensure that any work I do from now on has an accessible first approach. I'm now going to outline in no particular order what I have learned over the past few months.",
    link: 'http://www.thesoftwaresimpleton.com/blog/2017/11/05/accessible-react/'
  },
  {
    title: 'Instance Reducers',
    summary:
      'I recently came across a situation with redux that I had not considered before. I had created an autocomplete component that was using redux to store its internal state. This was all well and good when there was only one autocomplete component per page but when I have multiple autocomplete components on a given page then a change to one component was reflected in every component as you can see in the screen shot below where selecting a value in one component instance is reflected in all component instances:',
    link: 'http://www.thesoftwaresimpleton.com/blog/2016/12/20/instance-reducers/'
  },
  {
    title: 'Streams and Async Await in Nodejs',
    summary:
      'Dealing with asynchronicity in nodejs has been a challenge from day one due to its non blocking nature. The evolution has been slow and the node world has moved from callback hell to promises and from promises to generators.',
    link: 'http://www.thesoftwaresimpleton.com/blog/2016/09/10/async-await/'
  },
  {
    title: 'Animating a Sine Wave With d3.js and MathJax',
    summary:
      'I have spent the last year learning some of the maths I should have learned about 27 years ago. One of the things that I have found interesting while learning maths is the relationship between the unit circle and a sine wave graph of y = sin(x).',
    link: 'http://www.thesoftwaresimpleton.com/blog/2016/05/25/sine-wave/'
  }
];
