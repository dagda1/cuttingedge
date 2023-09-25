import { createCommand } from 'commander';
import { logger } from './logger.js';
import { encode } from 'blurhash';
import { getPixels } from '@unpic/pixels';

export const program = createCommand('rollup');

program
  .description('generate low quality placeholder LQIP using blurhash')
  .option('-i, --image <url>', 'the image to generate the blurhash from', false)
  .parse(process.argv)
  .action(async function ({ image }: { image: string }) {
    try {
      logger.start(`generating a blurhash for ${image}`);
      const imgData = await getPixels(image);

      const data = Uint8ClampedArray.from(imgData.data);

      const blurhash = encode(data, imgData.width, imgData.height, 4, 4);

      console.log(blurhash);

      logger.done('blurhash generated');
    } catch (err) {
      logger.error(err);
      process.exit(1);
    }
  })
  .parse(process.argv);
