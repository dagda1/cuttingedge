---
meta:
  title: Understanding Top and Bottom Types in TypeScript
  description: In TypeScript, there are two top types unknown and any, and never is the only bottom type
  date: "2023-08-12T00:00:00.000Z"
  image: "https://res.cloudinary.com/ddospxsc8/image/upload/v1691776328/top_yaehmt.png"
  tags: ["github-actions", "continuous-integration"]
---

Bottom and top types play foundational roles in type systems, helping to define the structure and relationships of types.

In formal type theory

The concept of a **bottom** type and a **top** exists in many programming language type systems, including Typescript. They don't get a lot of mention, but knowledge of the underlying theory can help you to understand type systems significantly.

Typescript has two top types, `any` and `unknown` and `never` is the bottom type.

But before we start, let us get a couple of definitions for important concepts.

## supertypes and subtypes

In category theory, if you had a type $$B$$ that is a subtype of another type $$A$$. Then $$A$$ is a supertype of $$B$$.

Using types $$A$$ and $$B$$ as examples is a bit too abstract, below is a simple object hiearchy with `Dog` as a supertype and `Pitbull` and `Alsation` as subtypes of the supertype `Dog`.

```ts
class Dog {}
class Pitbull extends Dog {}
class Alsation extends Dog {}
```

The walkies function below takes a `dog` argument of type `Dog`. The `dog` argument can be bound to the subtypes `Pitbull` and `Alsation`.

```ts {5,7-11}
class Dog {}
class Pitbull extends Dog {}
class Alsation extends Dog {}

function walkies(dog: Dog) {}

walkies(new Pitbull());
walkies(new Alsation());
```

## Top type

A top-level type or top type is also known as the universal supertype because all other types are subtypes of the top type. There is nothing above the top type.

In Typescript, there is the `any` top type and the `unknown` top type, which have very different behaviours.

### any

The `any` type is the most permissive type in Typescript. When you declare a variable as ``any`, you can:

Assing any value to it
Access any of its properties
Call it as a function
Assign it to any other variable

It turns off the type checking for variables declared with this type, making it very flexible but risky, as you might inadvertently introduce runtime errors.

```ts
let anything: any = "hello";
anything = 42;
let num: number = anything; // no error, even if anything isn't a number
anything.someRandomMethod(); // TypeScript won't complain
```

### unknown

Introduced in Typescrip 3.0, `unknown` is also a top type, but it is more permissive regarding operations. With `unknown` you can assign any variable value but can't perform operations on that variable without first asserting or narrowing the type.
You can't access arbitrary properties on an unknown variable.
You can't call/construct an unknown variable.
You can only use it on the right side of the assignment if the left side is unknown.
It's a safer alternative to any when you want to describe a value that comes from a dynamic source (like user input or a third-party library), and ensure that you perform proper type checking before operating on it.

```ts
let mystery: unknown = "hello";
mystery = 42;

// Following would result in errors:
// let num: number = mystery;
// mystery.someRandomMethod();

// To use the value, you have to perform type checking or assertions:
if (typeof mystery === "number") {
  let num: number = mystery; // This is safe now.
}
```

What about {}? Is {} a top type?

> A top type is a supertype of every other type.

A `type` is a set of all the possible values bound to a variable or argument.

In basic object-oriented programming, we know that a subtype variable or function argument can be bound to a supertype.

In the same way, a top type means that **all** other types in the type system are subtypes of the top type, and as such, we can assign anything to the top types, e.g.

```javascript
let n: unknown = 5;
let x: any = { foo: "bar" };
let s: unknown = "foobar";
```

The functions `topAny` and `topUnknown` below take a `value` argument that can be bound to any type.

```javascript
function topAny(value: any) {}
function topUnknown(value: unknown) {}

topAny({ foo: "bar" });
topUnknown(8);
topUnknown("8");
```

### The infamous any type

Using `any` is an escape hatch that tells the tsc compiler to stay out of the way and let me get on with things without compiling time type checks.

```javascript
const func = (dog: any) => {
  dog.bark(); // the compiler trusts you that bark exists on dog
};
```

The `any` type really reverts to javascript's weak typing and should really be avoided if possible now that `unknown` has been introduced.

### unknown type

The `unknown` type is a slightly different beast and was introduced in typedscript 3. You can think of it as a typesafe `any`.

Just like all types are assignable to `any`, all types are assignable to `unknown`.

The goal of `unknown` is to have a type in its least capable form. While anything can be assigned to an `unknown` type, we need to narrow the type or conditionally check the type before we can actually use it in a meaningful way.

### Type narrowing

Type narrowing is a crucial concept in Typescript and I don't think enough is made of the concept.

In the example below, [type guards](https://basarat.gitbooks.io/typescript/docs/const.html) are used to narrow the function argument `value` on line 17 below to the more specialized `Dog` or `Pitbull` types.

```javascript{numberLines:true}
interface Dog {
  bark: () => void;
}

interface Pitbull extends Dog {
  attack: () => void;
}

const isDog = (value: any): value is Dog => {
  return value && !!value.bark;
}

const isPitbull = (value: any): value is Pitbull => {
  return value && value.attack;
}

const walkies = (value: unknown) => {
  if (isPitbull(value)){
    value.bark();
    value.attack();
    return;
  }

  if (isDog(value)) {
    value.bark();
  }

  // if we used any instead of unknown then
  // the compiler would allow this
  // value.bark();
  // but with unknown we ge†
  // TypeError: Object is of type 'unknown'.
}
```

You cannot do much with the `unknown` type directly but you can use type guards to narrow the type to more specialized type-checking blocks of code operating on narrowed types. If we use `any` we get no type checking for our `unknown` type.

If you cast your mind back a few paragraphs to the somewhat dry explanation of what a top type is:

> A top type is a supertype of every other type.

```javascript
const walkies = (value: unknown) => {
```

As `unknown` is the supertype of every type in the same way as `Dog` is the supertype of `Pitbull` then it can accept any type but unlike `any`, we cannot just start invoking methods, instead the type is narrowed using type guards to guarantee that we are dealing with a more specialized type.

With the introduction of `unknown`, there really is very little reason to use `any` these days which basically is an instruction to forget the type system altogether.

## Bottom Type never

`never` is quite possibly the most appropriate keyword I have ever come across.

`never` represents the types of values that can never happen. This is known as the bottom type in type category theory.

Examples of types that can never happen are:

- functions that never return
- type guards that return false

Am example would be when an exception is thrown:

```javascript
// const neverWalkies: (dog: Dog) => never
const neverWalkies = (dog: Dog) => {
  throw new Error("No walkies now");
};
```

The exception means that the function will never return a value so the return type is `never`.

The `never` or bottom type has no values. You might think `null` or `undefined` are bottom types but variables and arguments can be bound to `null` or `undefined` as values and `never` is a value that can never occur.

OK great, but what on earth use is this `never` type?

The first use of `never` is what we have just covered, it is to type functions that do not return etc.

Another very important use is to prune unwanted values from conditional types.

If we look at the definition for the Typescript built in type `Extract`

```javascript
/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;
```

We could use `Extract` to create a more specialized `TameDog` that does not bite like this:

```javascript{numberLines:true}
// type TameDog = {
//   bark: () => void;
//   walk: () => void;
// }
type TameDog = Pick<Dog, Extract<keyof Dog, "bark" | "walk" | "meow">>;

const doggy: TameDog = {
  bark() {
    console.log('woof woof');
  },

  walk() {
    console.log('good doggy');
  }
}
```

`Extract` on line 5 will distribute over all values in a union but as `meow` is not a key of `Dog`, it will return never from the conditional expression and be excluded from the new union of values passed into the `Pick` type.

Bottom and top types are an important concept and I hope this has helped to explain the concepts.

A top type can be assigned to anything, a bottom type can never happen and has no value and everything else falls somewhere in between.

Please leave feedback in the comments below.
