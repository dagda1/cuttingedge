import inquirer from 'inquirer';
import path from 'path';
import fs from 'fs-extra';
import { ApplicationType } from '../types/applicationType';
import validateProjectName from 'validate-npm-package-name';
import { assert } from 'console';
import { installDependencies, installDevDependencies } from './installDependencies';
const appSource = {
    [ApplicationType.WebApp]: '../../web',
    [ApplicationType.package]: '../../package',
    [ApplicationType.cli]: '../../cli',
};
export async function scaffold() {
    const { projectName } = await inquirer.prompt({
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
        validate: async (input) => {
            const { validForNewPackages } = validateProjectName(input);
            return validForNewPackages;
        },
    });
    assert(!!projectName, 'projectName is required');
    const { value } = await inquirer.prompt({
        type: 'number',
        name: 'value',
        message: `What am I creating:
    
    1.  A web app
    2.  A package
    3.  A CLI app
    `,
    });
    assert(!!value, 'No application type has been made.');
    const applicationType = value;
    const root = path.resolve(projectName);
    const source = path.join(__dirname, appSource[applicationType]);
    const appName = path.basename(root);
    fs.ensureDirSync(projectName);
    const originalDirectory = process.cwd();
    process.chdir(root);
    fs.copySync(path.join(__dirname, '../../init/gitignore'), path.join(process.cwd(), '.gitignore'));
    switch (applicationType) {
        case ApplicationType.WebApp:
            fs.copySync(source, root);
            const rootSrc = path.join(root, 'src');
            fs.moveSync(path.join(root, 'App.tsx'), path.join(rootSrc, 'App.tsx'));
            fs.moveSync(path.join(root, 'index.tsx'), path.join(rootSrc, 'index.tsx'));
            break;
        case ApplicationType.package:
        case ApplicationType.cli:
            fs.copySync(source, root);
            break;
        default:
            throw new Error(`unknown application type: ${applicationType}`);
    }
    fs.moveSync(path.join(process.cwd(), 'eslintrc.json'), path.join(process.cwd(), '.eslintrc.json'));
    const packageJson = path.join(process.cwd(), 'package.json');
    const raw = fs.readFileSync(packageJson, 'utf8').replace(/\{\{name\}\}/g, appName);
    fs.writeFileSync(packageJson, raw);
    await installDependencies(appName, applicationType);
    await installDevDependencies(appName, applicationType);
    process.chdir(originalDirectory);
}
//# sourceMappingURL=createScaffold.js.map