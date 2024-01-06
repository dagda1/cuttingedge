import { markResetImported } from './reset-tracker';

if (process.env.NODE_ENV === 'development') {
  markResetImported();
}

// Ensure reset and atoms are the lowest specificity
import '../atoms/sprinkles.css';
