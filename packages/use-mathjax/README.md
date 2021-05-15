# @cutting/use-mathjax

React components `<MathJax />`, `<SVGMathJax>` and a `useMathJax` hook to easily load [MathJax version 3](https://github.com/mathjax/MathJax-src) Tex content.

A real working demo is [here](https://cutting.scot/viz/sine) which is why I wrote this component.

## install 

```sh
yarn add @cutting/use-mathjax
```

## MathJaxProvider

Both the `useMathJax` hook and the `MathJax` component will fail if the current component is not a descendant of the `MathJaxProvider`:

```ts
export { MathJaxProvider } from '@cutting/use-mathjax';

export const App: FC = () => {
  return (
    <StrictMode>
      <MathJaxProvider>
        <Maths />
      </MathJaxProvider>
    </StrictMode>
  );
};
```

## useMathJax hook

```ts
import { useMathJax, MathJaxProvider } from '@cutting/use-mathjax';

const Maths = () => {
  const ref = useRef<HTMLParagraphElement>();
  useMathJax({ elements: ref });

  return (
    <p 
      ref={ref}
      className="math"
      dangerouslySetInnerHTML={{
        __html: `
        $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$
      `,
      }}
    ></p>
  )
}

export const App: FC = () => {
  return (
    <StrictMode>
      <MathJaxProvider>
        <Maths />
      </MathJaxProvider>
    </StrictMode>
  );
};
```

![math notation rendered with useMathJax hook](./img/eq1.png)

`useMathJax` takes a configuration object with a fields property that points to an element of an array of elements with MathJax markup.

## MathJax component

```ts
import { MathJax, MathJaxProvider } from '@cutting/use-mathjax';

const Maths = () => {
  return (
    <>
      <MathJax expr={`$$\\int x^2dx$$`} />
      <MathJax expr={`$$\\frac{5\\pi}4$$`} />
      <MathJax expr={`$$\\frac{3\\pi}2$$`} />
    </>
  )
}

export const App: FC = () => {
  return (
    <StrictMode>
      <MathJaxProvider>
        <Maths />
      </MathJaxProvider>
    </StrictMode>
  );
};
```

![math notation rendered with MathJax component](./img/eq2.png)

The `MathJax` component takes an `expr` string prop of MathJax markup.