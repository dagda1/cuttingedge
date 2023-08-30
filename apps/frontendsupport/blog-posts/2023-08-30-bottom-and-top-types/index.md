---
meta:
  title: Never say never again, A deep dive into Typescript's never type
  description: In TypeScript, there are two top types unknown and any, and never is the only bottom type
  date: "2023-08-30T00:00:00.000Z"
  image: "https://res.cloudinary.com/ddospxsc8/image/upload/v1692641451/top_dc610r.png"

  tags: ["github-actions", "continuous-integration"]
---

## Why never Matters

In a language that aims to bring strong typing to JavaScript, a type that indicates the absence of a value seems paradoxical at first. However, the `never` type has several critical use cases that can make your code more robust and self-explanatory.

### top and bottom types

The concept of a top type and a bottom type has existed in computer programming languages for a long time. Typescript has two top types or universal supertypes, `any` and `unknown` and `never` is the bottom type. The top type can be represented in academia using the $$\top$$ symbol, and the $$\bot$$ symbol can represent the bottom type.

A top type is the supertype of all types, and the bottom type can be known as the subtype of all types.

Before progressing further, let us define what a supertype and subtype are.

## supertypes and subtypes

A `supertype` is a generalized entity that can represent common properties. Supertypes exist higher up the hierarchy or near the top because they are more generic and cover more cases. Entities like `Animal` or `Vehicle` are good examples of supertypes.

A `subtype` is a specialized version of a supertype, e.g. a `Dog` is a subtype of the `Animal` supertype or a `Car` is a subtype of `Vehicle`. Subtypes exist lower down the hierarchy or near the bottom.

Below is a simple object hierarchy with `Dog` as a supertype and `Pitbull` and `Alsation` as subtypes of the supertype `Dog`.

```ts {12} showLineNumbers
class Dog {}
class Pitbull extends Dog {}
class Alsation extends Dog {}

function walkies(dog: Dog) {}

walkies(new Pitbull());
walkies(new Alsation());

function walkies2(pitbull: Pitbull) {}

walkies2(new Alsation()); // wut?  No type error?
```

The walkies function below takes a `dog` argument of type `Dog`. The `dog` argument can be bound to the `Pitbull` and `Alsation` subtypes.

One interesting point that might catch you out is on line 12 where you might expect to see an error such as:

> Argument of type 'Alsation' is not assignable to parameter of type 'Pitbull'.

Typescript uses structural typing and not nominal typing, and all three types (`Dog`, `Alsation` and `Pitbull`) have the same properties (none in this example), so Typescript is happy.

However, if we add a property to the `Pitbull` class, then we get the behaviour you would expect:

```ts {15,16} showLineNumbers
class Dog {}
class Pitbull extends Dog {
  get isJawLocked(): boolean {
    return this.lockjaw;
  }

  constructor(private lockjaw: boolean) {
    super();
  }
}
class Alsation extends Dog {}

function walkies2(pitbull: Pitbull) {}

walkies2(new Alsation()); // Argument of type 'Alsation' is not assignable to parameter of type 'Pitbull'.
//Type 'Dog' is missing the following properties from type 'Pitbull': isJawLocked, lockjaw
```

## Never is Typescript's Bottom Type

Wikipedia gives the following explanation for a bottom type, while slightly confusing, enforces the point that no type can be a subtype of the bottom type and is therefore at the bottom of the hierarchy:

> the bottom type is a subtype of all other types

Below is an example that will help us to illustrate the point:

```ts
type A = never extends "a" | 1 | true | false ? true : false; // true
```

You might have expected type `A` to be false, but it is true. Type `A` is true because `never` is the subtype of all other types; therefore, it must extend the type on the right of the `extends` keyword and equate to `true`.

Similarly, the same is true of a tuple of `never` below:

```ts
type A = [never] extends ["a" | 1 | true | false] ? true : false; // true
```

If `never` is the subtype of all types, then `[never]` must also extend all tuple types.

## Never, returning never in Boolean conditional type

A fascinating point is below with the `IsNever` type, which we want to return `true` if a type equates to `never`:

```ts {1} showLineNumbers
type IsNever<T> = T extends never ? true : false;

type A = IsNever<never>; // never
```

Wut? Why am I not getting `true` here??

The reason is that `never` is a bottom type and can be considered an empty union with no values. It is like a union with 0 members or no values, and the distribution effectively stops dead, which is why `never` is returned.

Fortunately, there is a way around this below:

```ts {1} showLineNumbers
type IsNever<T> = [T] extends [never] ? true : false;

type A = IsNever<never>; // true
type B = IsNever<string>; // false
```

In the code example above, both `[T]` and `[never]` are tuples, and this will force the distribution and either true or false will be returned depending on the type of the generic argument `T`.

The `IsNever` type example helped me to understand why exactly `never` can stop the distribution of a conditional type.

The `never` type in Typescript is not a direct equivalent to the formal definition of a bottom type but is the closest in terms of concept. Where `never` deviates from the standard explanation is that `never` can be assigned to any other type.

Another example of the bottom type having no value is that if a function returns the bottom type, it cannot return any value.

Examples of functions that return `never`:

### A function that throws an error:

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

### A function with an unreachable end:

```ts
function infiniteLoop(): never {
  while (true) {}
}
```

## Practical uses of never

The `never` type has some efficient benefits:

### Using type assertions with never

If you're doing exhaustive type checks, you can leverage the `never` type to ensure that all switch statement cases are handled at compile-time.

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

### Filtering union types

Typescript comes with a builtin utility type [Exclude](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers).

```ts
type Exclude<T, U> = T extends U ? never : T;

type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // Result: 'c'
```

The `Exclude` type iterates over each member of the union `T` and checks if it extends any type in the union `U`. If it does, it excludes that member from the resulting union by turning it into `never`.

You can also use `never` to conditionally filter types in more complex scenarios, for instance, filtering out types that have a certain property:

```ts
type FilterOutWithProperty<T, K extends string> = T extends { [key in K]: any }
  ? never
  : T;

type Candidates = { a: number } | { b: number; c: string } | { d: boolean };

// Will only have { d: boolean }
type Result = FilterOutWithProperty<Candidates, "a" | "b">;
```

In this example, we define a `FilterOutWithProperty` type that filters out types that contain a property with the key `K`. It uses a conditional type to check whether the property exists, and if it does, the type is filtered out by turning it into `never`.

## Never say never again

In summary, `never` is a compelling concept in TypeScript with many practical uses. It is also super interesting to geek out on concepts such as top and bottom types which have existed for a long time.
