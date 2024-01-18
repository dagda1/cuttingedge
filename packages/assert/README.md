# @cutting/assert

## Just the hard version of [fram-x/assert-ts](https://github.com/fram-x/assert-ts). I kept running into issues with the default export as described [here](https://github.com/fram-x/assert-ts/issues/23). I never used the soft version so I created a hard only version here.

Invariant and non-null/undefined assertions

- logs error and throws exception, and narrows type.

## Introduction

The purpose of this library is to make assumptions explicit, rather than just a comment or even worse just a thought while writing your code. This applies both to assumptions about conditions to be met or values not being null/undefined.

## Installation

To install the library into your project, run yarn or npm:

`yarn add @cutting/assert`

or

`npm i @cutting/assert`

or

`pnpm add @cutting/assert`

## Examples

### Assert condition

```javascript
import assert from '@cutting/assert';

function transfer(fromId: string, toId: string, amount: number) {
  // Throws error if not true
  assert(amount > 0);
  ...
}

```

### Assert condition with more context info

To make it easier to find the cause of an assertion failure, you can provide more information, i.e. a custom message and any relevant properties.

```javascript
import assert from '@cutting/assert';

function transfer(fromId: string, toId: string, amount: number) {
  // Custom message and properties will be formatted into error message
  assert(amount > 0, "Cannot transfer 0 or negative amounts", { fromId, toId, ammount });
  ...
}

```

### Assert non-null/undefined

```javascript
import assert from '@cutting/assert';

function findAccount(id): Account | undefined { ... }

function transfer(fromnId: string, toId: string, amount: number) {
  ...

  // Throws error if findAccount returns undefined
  const fromAccount = assert(findAccount(fromId), "From account does not exist", { fromId});

  // Type restriction: when a non-null/undefined assertion succeeds,
  // type is restricted, e.g. to Account. Hence, no need for further testing of undefined/null
  fromAccount.amount -= amount;

  ...
}

```

### Assert condition

Checks that a condition is true. If not, an error is thrown. By default, any message or properties provided will be formatted as part of the error's message. See below for custom configuration.

```javascript
function assert(
  condition: boolean,
  message?: string,
  props?: object | (() => object),
): asserts condition;
```

### Assert non-null/undefined

Checks that a value is not null or undefined. If null or undefined, an error is thrown. When successful, the returned value's type is restricted to the expected type.

```javascript
function assert<T>(
  value: T | undefined | null,
  message?: string,
  props?: object | (() => object),
): T;
```

### Configuration

The default configuration throws an Error with a message saying whether it was a condition or null/undefined check that failed and any custom message or properties formatted as part of the message.

Use `configureAssert` to customize this, providing an `AssertConfiguration` object with any of the following properties:

| Property        | Description                                                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formatter       | To do custom formatting of error message `(failureType: FailureType, message?: string, props?: object) => string`                                         |
| errorCreator    | To create custom error objects `(failureType: FailureType, message?: string, props?: object) => Error`                                                    |
| errorReporter   | To do custom reporting of assertion failures, e.g. report to backend `(failureType: FailureType, error: Error, message?: string, props?: object) => void` |
| warningReporter | To do custom reporting of soft assertion failures, e.g. report to backend `(failureType: FailureType, message?: string, props?: object) => void`          |
