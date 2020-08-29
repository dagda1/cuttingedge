import { exec } from 'child_process';

export const isMonorepo = (): Promise<{ monorepo: boolean }> => {
  return new Promise((resolve) => {
    exec('yarn workspaces info', (err) => {
      resolve({ monorepo: err === null });
    });
  });
};
