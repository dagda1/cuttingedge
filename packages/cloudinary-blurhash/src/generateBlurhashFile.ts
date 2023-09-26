import { v2 } from 'cloudinary';
import fs from 'fs';
import { config } from 'dotenv';
import type { BlurHashImage, SearchResults } from './types';
import { getPixels } from '@unpic/pixels';
import { encode } from 'blurhash';
import chalk from 'chalk';
import logUpdate from 'log-update';
import path from 'path';

const {
  promises: { writeFile },
} = fs;

config();

v2.config({ secure: true });

// v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

console.log(v2.config());

const percentage = (partialValue: number, totalValue: number) => ((100 * partialValue) / totalValue).toFixed(2);

const parseHrtimeToSeconds = (hrtime: [number, number]) => {
  const seconds = (hrtime[0] + hrtime[1] / 1e9).toFixed(3);
  return seconds;
};

const updateLogs = (a: unknown, b: unknown, c: unknown, d: unknown) =>
  logUpdate(
    `\n${a} Processed.\n\n${b} images remaining to process\n\n${c} images processed ✅\n\nProcess started ${d}s ago`,
  );

export async function generateBlurhashFile(fileName: string): Promise<void> {
  const startTime = process.hrtime();
  const outFile = path.join(process.cwd(), fileName);

  const blurhashImages: BlurHashImage[] = [];

  const results: SearchResults = await v2.search.expression('format=(NOT ico)').max_results(1000).execute();

  const images = results.resources.map(({ secure_url, width, height }) => ({ secure_url, width, height }));

  console.clear();
  console.log(`About to process ${chalk.green(images.length)} images`);

  for (const image of images) {
    const imgData = await getPixels(image.secure_url);

    const data = Uint8ClampedArray.from(imgData.data);

    const blurhash = encode(data, imgData.width, imgData.height, 4, 4);

    const urlPrts = image.secure_url.split('/');

    blurhashImages.push({
      id: urlPrts.slice(-1)[0],
      url: image.secure_url,
      blurhash,
      width: image.width,
      height: image.height,
    });

    const elapsedSeconds = parseHrtimeToSeconds(process.hrtime(startTime));

    updateLogs(
      chalk.green.bold(`${percentage(blurhashImages.length, images.length)}%`),
      chalk.green.bold(`${images.length - blurhashImages.length}`),
      chalk.green.bold(`${blurhashImages.length}`),
      chalk.green.bold(elapsedSeconds),
    );
  }

  console.log(chalk.blue(`writing results to ${outFile}`));

  writeFile(outFile, JSON.stringify(blurhashImages));
}
