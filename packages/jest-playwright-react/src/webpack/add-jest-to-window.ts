/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import format from 'format-util';
import pretty from 'pretty-format';

throw new Error('fookies');

// some snippet of the code inspired/copied by https://github.com/facebook/jest/blob/master/packages/jest-each/src/bind.js

if (!window.Proxy) {
  throw new Error('The environment needs to support window.Proxy!');
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const makeShrugger = (): any => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const functionMock = () => {};
  return new Proxy(functionMock, {
    apply: () => makeShrugger(), // if called as function
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get: (target: any, name) => {
      // if trying to get property
      if (name in target) {
        return target[name];
      }
      return makeShrugger();
    },
  });
};

// ¯\_(ツ)_/¯ .. allows you to call anything on him and just ignores it
const shrugger = makeShrugger();
window.jest = shrugger;
window.page = shrugger;

const notImplementedYet = (name: string) => () => {
  throw new Error(`${name} is not supported yet in jest-puppeteer-react`);
};

window.beforeAll = notImplementedYet('beforeAll');
window.afterAll = notImplementedYet('afterAll');
window.beforeEach = notImplementedYet('beforeEach');
window.afterEach = notImplementedYet('afterEach');

window.__path = []; // current test path
window.__tests = {}; // 'Button should render': <button>hi</button>

const SUPPORTED_PLACEHOLDERS = /%[sdifjoOp%]/g;
const PRETTY_PLACEHOLDER = '%p';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const applyRestParams = (...params: any[]) => {
  // if (params.length < test.length) return done => test(...params, done);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return () => it(...params);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getPrettyIndexes = (placeholders: any) =>
  placeholders.reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (indexes: any, placeholder: any, index: any) =>
      placeholder === PRETTY_PLACEHOLDER ? indexes.concat(index) : indexes,
    [],
  );

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const arrayFormat = (title: string, ...args: any[]) => {
  const placeholders = title.match(SUPPORTED_PLACEHOLDERS) || [];
  const prettyIndexes = getPrettyIndexes(placeholders);

  const { title: prettyTitle, args: remainingArgs } = args.reduce(
    (acc, arg, index) => {
      if (prettyIndexes.indexOf(index) !== -1) {
        return {
          args: acc.args,
          title: acc.title.replace(PRETTY_PLACEHOLDER, pretty(arg, { maxDepth: 1, min: true })),
        };
      }

      return {
        args: acc.args.concat([arg]),
        title: acc.title,
      };
    },
    { args: [], title },
  );

  return format(prettyTitle, ...remainingArgs.slice(0, placeholders.length - prettyIndexes.length));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const each = (cb: any) => (...args: any[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (title: string, testFun: any) => {
    const table = args[0].every(Array.isArray) ? args[0] : args[0].map((entry: unknown) => [entry]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return table.forEach((row: any) => cb(arrayFormat(title, ...row), applyRestParams(row, testFun)));
  };
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.describe = (name: string, fun) => {
  window.__path.push(name);
  // console.log('describe', window.__path);
  fun();
  window.__path.pop();
};
window.describe.each = each(window.describe);
window.describe.only = window.describe;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.describe.skip = () => {};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.test = (name, fun?: ProvidesCallback) => {
  window.__path.push(name);
  // console.log('test', window.__path);
  fun();
  window.__path.pop();
};
window.test.each = each(window.test);
window.test.only = window.test;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.test.skip = () => {};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.test.todo = () => {};

window.it = window.test;
