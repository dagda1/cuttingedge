import './polyfills';
import './raf';
import { configure } from '@testing-library/react';
configure({ testIdAttribute: 'data-selector' });
