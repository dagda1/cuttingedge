import { createCommand } from 'commander';
import { generateBlurhashFile } from './generateBlurhashFile';

export const program = createCommand('rollup');

program
  .description('generate low quality placeholder LQIP using blurhash')
  .option('-f, --file <file>', 'the name of the the json file', './blurhash_image_map.json')
  .parse(process.argv)
  .action(async function ({ file }: { file: string }) {
    try {
      generateBlurhashFile(file);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  })
  .parse(process.argv);
