import './raf';
import './polyfills';
import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-selector' });
