import '../atoms/sprinkles.css';

import { markResetImported } from './reset-tracker';

if (process.env.NODE_ENV === 'development') {
  markResetImported();
}
