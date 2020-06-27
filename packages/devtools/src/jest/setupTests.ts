import './raf';
import './polyfills';

const { configure } = require('@testing-library/react');

configure({ testIdAttribute: 'data-selector' });
