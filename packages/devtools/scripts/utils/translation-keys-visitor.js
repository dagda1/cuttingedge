const path = require('path');

const IDENTIFIER = 'Identifier';
const IMPORT_DEFAULT_SPECIFIER = 'ImportDefaultSpecifier';
const CALL_EXPRESSION = 'CallExpression';
const MEMBER_EXPRESSION = 'MemberExpression';
const STRING_LITERAL = 'StringLiteral';
const OBJECT_EXPRESSION = 'ObjectExpression';

let translateBinding = null;
const translationKeys = new Set();

function isRelativePath(file) {
  return file[0] === '.';
}

function getPathRelativeToRoot(sourceFile, requireFile) {
  return path.join(path.dirname(sourceFile), requireFile);
}

function isTranslationIndex(sourceFile, requireFile) {
  // TODO: this is a bit hardcoded...
  const file = getPathRelativeToRoot(sourceFile, requireFile);
  return file === 'translations' || file === 'translations/index';
}

function isIdentifier(node, name) {
  return node.type === IDENTIFIER && node.name === name;
}

function getDefaultName(node) {
  const defaultSpecifier = node.specifiers.find(s => s.type === IMPORT_DEFAULT_SPECIFIER);

  return defaultSpecifier && defaultSpecifier.local.name;
}

function isReactCreateElement(node) {
  const { callee } = node;

  return (
    node.type === CALL_EXPRESSION &&
    callee.type === MEMBER_EXPRESSION &&
    isIdentifier(callee.object, 'React') &&
    isIdentifier(callee.property, 'createElement')
  );
}

function matchKey(key, name) {
  return (key.type === IDENTIFIER && key.name === name) || (key.type === STRING_LITERAL && key.value === name);
}

function getPropertyValue(node) {
  const property = node.properties.find(property => matchKey(property.key, 'key'));

  if (property.value.type === STRING_LITERAL) {
    return property.value.value;
  } else {
    return null;
  }
}

function addKeyFromTranslateCall(node) {
  const arg = node.arguments[0];

  if (arg && arg.type === STRING_LITERAL) {
    translationKeys.add(arg.value);
  }
}

function addKeyFromCreateElement(node) {
  const arg = node.arguments[1];

  if (arg && arg.type === OBJECT_EXPRESSION) {
    const key = getPropertyValue(arg);
    key && translationKeys.add(key);
  }
}

const visitor = {
  Program: {
    enter() {
      binding = null;
    },
  },
  ImportDeclaration(path, state) {
    const filename = state.file.opts.sourceFileName;
    const node = path.node;

    if (isRelativePath(node.source.value)) {
      if (isTranslationIndex(filename, node.source.value)) {
        const name = getDefaultName(node);
        translateBinding = name && path.scope.getBinding(name);
      }
    }
  },
  MemberExpression(path) {
    const { parent, scope } = path;
    const { object, property } = path.node;

    if (scope.getBinding(object.name) === translateBinding) {
      if (property.name === 'translate' && parent.type === CALL_EXPRESSION) {
        addKeyFromTranslateCall(parent);
      } else if (isReactCreateElement(parent)) {
        addKeyFromCreateElement(parent);
      }
    }
  },
};

module.exports.visitor = visitor;
module.exports.translationKeys = translationKeys;
