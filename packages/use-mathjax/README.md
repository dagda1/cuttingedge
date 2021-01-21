# @cutting/use-mathjax

A React component `<MathJax />` and a `useMathJax` hook to easily load [MathJax version 3](https://github.com/mathjax/MathJax-src) Tex content.



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
      <MathJax html={`$$\\int x^2dx$$`} />
      <MathJax html={`$$\\frac{5\\pi}4$$`} />
      <MathJax html={`$$\\frac{3\\pi}2$$`} />
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

The `MathJax` component takes an `html` string prop of MathJax markup.