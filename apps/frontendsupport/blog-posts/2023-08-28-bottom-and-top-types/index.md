---
meta:
  title: Understanding Top and Bottom Types in TypeScript
  description: In TypeScript, there are two top types unknown and any, and never is the only bottom type
  date: "2023-08-28T00:00:00.000Z"
  image: "https://res.cloudinary.com/ddospxsc8/image/upload/v1692641451/top_dc610r.png"

  tags: ["github-actions", "continuous-integration"]
---

In the ever-evolving landscape of TypeScript, understanding fundamental concepts such as top and bottom types can be invaluable. They deepen our comprehension of the language's type system and offer practical benefits in our day-to-day coding.

Typescript has two top types, `any` and `unknown` and `never` is the bottom type.

A top type is the supertype of all types, and the bottom type can be known as the subtype of all types.

Before progressing further, let us define what a supertype and subtype are.

## supertypes and subtypes

A `supertype` is a generalized entity that can represent common properties. Supertypes exist higher up the hierarchy or near the top because they are more generic and cover more cases. Entities like `Animal` or `Vehicle` are good examples of supertypes.

A `subtype` is a specialized version of a supertype, e.g. a `Dog` is a subtype of the Animal supertype or a `Car` is a subtype of `Vehicle`. Subtypes exist lower down the hierarchy or near the bottom.

Below is a simple object hierarchy with `Dog` as a supertype and `Pitbull` and `Alsation` as subtypes of the supertype `Dog`.

```ts {5,7-11}
class Dog {}
class Pitbull extends Dog {}
class Alsation extends Dog {}

function walkies(dog: Dog) {}

walkies(new Pitbull());
walkies(new Alsation());
```

The walkies function below takes a `dog` argument of type `Dog`. The `dog` argument can be bound to the `Pitbull` and `Alsation` subtypes.

## Bottom Type

We will break with tradition and start at the end of the hierarchy of types, the bottom type.

Wikipedia gives the following explanation, while slightly confusing, enforces the point that no type can be a subtype of the bottom type and is therefore at the bottom of the hierarchy:

> the bottom type is a subtype of all other types

The $$\bot$$ symbol often represents the bottom type.

A better way to think of the bottom type is that if a function returns the bottom type, it cannot return any value.

The `never` type in Typescript is not a direct equivalent to the formal definition of a bottom type but is the closest in terms of concept. Where `never` deviates from the formal definition is that `never` can be assigned to any other type.

Examples of functions that return never:

#### A function that throws an error:

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

#### A function with an unreachable end:

```ts
function infiniteLoop(): never {
  while (true) {}
}
```

### Practical uses of never

The `never` type has some efficient uses:

#### Using type assertions with never

If you're doing exhaustive type checks, you can leverage the never type to ensure that all cases of a union are handled at compile-time.

```ts
type Fruit = "apple" | "orange" | "banana";

function getFruitInfo(fruit: Fruit) {
  switch (fruit) {
    case "apple":
      return "It's red";
    case "orange":
      return "It's orange";
    case "banana":
      return "It's yellow";
    default:
      // If we add another fruit to the Fruit type and forget to handle it here,
      // TypeScript will error at compile time because the type of `fruit` would not be `never`.
      const exhaustiveCheck: never = fruit;
      return exhaustiveCheck;
  }
}
```

#### Filtering union types

```ts
type Exclude<T, U> = T extends U ? never : T;

type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // Result: 'c'
```

The `Exclude` built-in utility type in TypeScript will filter out any types in `T` that extend `U`. Any type in `T` that matches `U` will evaluate to `never` and effectively be removed from the union.

One interesting case is the `IsNever` type below:

```ts {1} showLineNumbers
type IsNever<T> = [T] extends [never] ? true : false;

type Test1 = IsNever<never>; // true
type Test2 = IsNever<string>; // false
```

It is worth noting that both `[T]` and `[never]` have square brackets around them. Why do we need to do that?

Consider the following where neither `T` or `never` are tuples:

```ts
type IsNever<T> = T extends never ? true : false;

type O = IsNever<never>; // never;
```

Wut? Why am I not getting true or false here??

The reason is that `never` is a bottom type that never distributes. It is like a union with 0 members, and the distribution effectively stops dead, which is why `never` is returned.

## Top type

A top-level type or top type is also known as the universal supertype because all other types are subtypes of the top type. There is nothing above the top type. The $$\top$$ symbol commonly denotes the top type.

The critical aspects of the top type are:

- Represents a type that can hold a value of any other type.
- It is the universal type, encompassing all possible values.
- All other types are subtypes of the top type.

Typescript has the `any` and `unknown` top types, which have very different behaviours.

### any

The `any` type is the most permissive type in Typescript. When you declare a variable as `any`, you can:

- Assign any value to it
- Access any of its properties
- Call it as a function
- Assign it to any other variable

Declaring a variable as `any` effectively turns off the type checking, making it very flexible but risky, as you might inadvertently introduce runtime errors.

```ts
let anything: any = "hello";
anything = 42;
let num: number = anything; // no error, even if anything isn't a number
anything.someRandomMethod(); // TypeScript won't complain
```

### unknown

Introduced in Typescrip 3.0, `unknown` is also a top type, but it is much less permissive regarding operations. With `unknown`, you can assign any variable value but can't perform operations on that variable without first asserting or narrowing the type.

- You cannot access arbitrary properties on an unknown variable.
- You cannot call/construct an unknown variable.
- You can only use it on the right side of the assignment if the left side is unknown.

`unknown` is a safer alternative to `any` when you want to describe a value from a dynamic source (like user input or a third-party library) and ensure that you perform proper type checking before operating on it.

```ts
let mystery: unknown = "hello";
mystery = 42;

//following would result in errors:
// let num: number = mystery;
// mystery.someRandomMethod();
// To use the value, you have to perform type checking or assertions:
if (typeof mystery === "number") {
  let num: number = mystery; // This is safe now.
}
```

## TLDR;

- The top type $$\top$$ is the supertype of all types
- `any` and `unknown` are top types in Typescript
- The bottom type $$\bot$$ is the subtype of all types
- `never` is the closest to a bottom type in Typescript

As the top type, the `any` type provides flexibility and can be a bridge when transitioning from JavaScript to TypeScript or when dealing with complex, unknown type scenarios. However, with its power comes the responsibility to use it judiciously to avoid undermining the type safety that TypeScript offers.

On the other hand, the `never` type, representing the bottom type, serves as a tool for exhaustive type checks and unreachable code paths. It's a testament to TypeScript's design that even such a theoretical concept has real-world utility, aiding in writing safer and more maintainable code.

Diving deeper into type theory and how other languages handle top and bottom types can be rewarding for those intrigued by these concepts. As TypeScript continues to grow and evolve, having a solid grasp of these foundational ideas will undoubtedly serve us well in navigating and mastering the intricacies of this powerful language.
