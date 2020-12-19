import fs from 'fs';
import { getTopFrame, getStackTraceLines, separateMessageFromStack } from 'jest-message-util';
const { codeFrameColumns } = require('@babel/code-frame');

type ErrorLike = {
  message: string;
  stack: string;
};

function pretty(error: ErrorLike | Error) {
  const { message, stack } = error;
  const lines = getStackTraceLines(stack as string);
  const topFrame = getTopFrame(lines);
  const fallback = `${message}${stack}`;

  if (!topFrame) {
    return fallback;
  }

  const { file, line } = topFrame;
  try {
    const result = codeFrameColumns(fs.readFileSync(file, 'utf8'), { start: { line } }, { highlightCode: true });
    return `\n${message}\n\n${result}\n${stack}\n`;
  } catch (error) {
    return fallback;
  }
}

function usePrettyErrors(transform: (...args: unknown[]) => ErrorLike) {
  const { prepareStackTrace } = Error;

  Error.prepareStackTrace = (error, trace) => {
    const prepared = prepareStackTrace ? separateMessageFromStack(prepareStackTrace(error, trace)) : error;
    const transformed = transform ? transform(prepared) : prepared;
    return pretty(transformed);
  };
}

// Clean up Webpack's sourcemap namespacing in error stacks
// @see https://github.com/facebook/create-react-app/blob/next/packages/react-dev-utils/formatWebpackMessages.js#L112
const stackTransform = ({ stack = '', ...rest }) => ({
  stack: stack.replace('/build/webpack:', ''),
  ...rest,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
usePrettyErrors(stackTransform as any);
