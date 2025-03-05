import type { JSX as Jsx } from "react/jsx-runtime";

declare global {
  namespace JSX {
    type ElementType = Jsx.ElementType;
    interface Element extends Jsx.Element {}
    interface ElementClass extends Jsx.ElementClass {}
    interface ElementAttributesProperty extends Jsx.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends Jsx.ElementChildrenAttribute {}
    type LibraryManagedAttributes<C, P> = Jsx.LibraryManagedAttributes<C, P>;
    interface IntrinsicAttributes extends Jsx.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> extends Jsx.IntrinsicClassAttributes<T> {}
    interface IntrinsicElements extends Jsx.IntrinsicElements {}
  }
}