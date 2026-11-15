const selectorRule = (selector, message) => ({
  create: (context) => ({ [selector]: (node) => context.report({ node, message }) }),
});

const allowedComment = /^\s*(eslint-|oxlint-|@ts-expect-error|\$Expect(Type|Error)\b|GraphQL\b)|^\/\s*<reference /;

const noComments = {
  create: (context) => ({
    Program: () => {
      context.sourceCode
        .getAllComments()
        .filter((comment) => comment.type !== 'Shebang' && !allowedComment.test(comment.value))
        .forEach((comment) =>
          context.report({ node: comment, message: 'Remove the comment. Code must explain itself.' }),
        );
    },
  }),
};

export default {
  meta: { name: 'cutting' },
  rules: {
    'no-comments': noComments,
    'no-react-namespace': selectorRule(
      "MemberExpression[object.name='React']",
      'Avoid using React.*. Use named imports instead.',
    ),
    'no-react-namespace-types': selectorRule(
      "TSTypeReference > TSQualifiedName[left.name='React']",
      'Avoid using the global `React.` namespace for types (e.g. `React.MouseEvent`). Import the type directly instead.',
    ),
    'no-browser-storage': selectorRule(
      'Identifier[name=/^(localStorage|sessionStorage)$/]',
      'Do not touch browser storage in a test. Pass an in-memory storage to the code under test.',
    ),
    'no-test-code-imports': selectorRule(
      String.raw`:matches(ImportDeclaration, ExportNamedDeclaration, ExportAllDeclaration)[source.value=/^(@storybook\/|storybook\/|msw(\/|$)|vitest$|@testing-library\/)/]`,
      'App code must not import test or story packages. Move the helper to a .test or .stories file, __mocks__ or .storybook.',
    ),
  },
};
