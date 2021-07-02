import dedent from 'dedent';

let resetImported = false;

export const markResetImported = (): void => {
  resetImported = true;
};

export const ensureResetImported = (): void => {
  if (!resetImported) {
    throw new Error(dedent`
      something imported before reset.

      Make sure to import the reset module before importing any components. 
      This ensures the CSS reset does not override the component styles. 
    
      e.g.

      import '@cutting/component-library/tools/style/reset'; // <-- Must be first
    `);
  }
};
