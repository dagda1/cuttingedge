/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const AWS = require('@aws-sdk/client-s3');
const { resolve, join } = require('path');
const { getMIMEType } = require('node-mime-types');
const { CloudFrontClient, CreateInvalidationCommand } = require('@aws-sdk/client-cloudfront');

const {
  promises: { readdir, stat: getStats },
} = fs;

const AWS_CONFIG = {
  region: process.env.REGION_AWS,
  bucket: process.env.AWS_BUCKET_NAME,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS,
    secretAccessKey: process.env.AWS_SECRET,
  },
};

const s3Client = new AWS.S3Client(AWS_CONFIG);

const cloudfrontClient = new CloudFrontClient(AWS_CONFIG); // Create cloudfront client

const command = new CreateInvalidationCommand({
  DistributionId: process.env.AWS_DISTRIBUTION_ID, // Cloudfront Distribution ID -- e.g E1AA11V111AA22
  InvalidationBatch: {
    CallerReference: new Date().getTime(),
    Paths: {
      Quantity: 1,
      Items: ['/*'],
    },
  },
});

// Upload file to s3 bucket
const uploadFile = async function uploadFile(filePath, params) {
  const parameters = { ...params };

  try {
    const fileStream = fs.createReadStream(filePath);

    parameters.Body = fileStream;
    parameters.ContentType = getMIMEType(filePath);
    parameters.CacheControl = 'public, max-age=31556926';

    try {
      await s3Client.send(new AWS.PutObjectCommand(parameters)); // It will push object to S3 client
      console.log('Success', filePath);
      console.info(`${parameters.Key} (${parameters.ContentType}) uploaded in bucket ${parameters.Bucket}`);
    } catch (err) {
      console.log('Error', err);
    }
  } catch (e) {
    throw new Error(`unable to upload file ${filePath} at ${parameters.Key}, ${e.message}`);
  }

  return true;
};

const uploadDirectory = async (filePath, params, rootKey) => {
  const parameters = { ...params };
  const root = rootKey && rootKey.constructor === String ? rootKey : '';
  let dirPath;

  try {
    dirPath = resolve(filePath);
    const dirStats = await getStats(dirPath);

    if (!dirStats.isDirectory()) {
      throw new Error(`${dirPath} is not a directory`);
    }

    console.info(`uploading directory ${dirPath}...`);

    const filenames = await readdir(dirPath);
    if (Array.isArray(filenames)) {
      await Promise.all(
        filenames.map(async (filename) => {
          const nextFilepath = `${dirPath}/${filename}`;
          const fileStats = await getStats(nextFilepath);
          if (fileStats.isFile()) {
            parameters.Key = join(root, filename);
            await uploadFile(nextFilepath, parameters);
          } else if (fileStats.isDirectory()) {
            await uploadDirectory(nextFilepath, params, join(root, filename));
          }
        }),
      );
    }
  } catch (e) {
    throw new Error(`unable to upload directory ${filePath}, ${e.message}`);
  }

  console.info(`directory ${dirPath} successfully uploaded`);
  return true;
};

// Upload build folder
(async () => {
  const DEFAULT_OPTION = {
    Bucket: process.env.AWS_BUCKET_NAME,
  };

  try {
    console.time('s3 .next upload');
    await uploadDirectory(
      './.next/static', // Built static file
      DEFAULT_OPTION,
      '_next/static', // Destination
    );
    console.timeEnd('s3 .next upload');

    console.time('s3 public upload');
    await uploadDirectory('./public', DEFAULT_OPTION); // Uploading public folder which will have static images
    console.timeEnd('s3 public upload');

    console.time('Cloudfront Invalidation');
    await cloudfrontClient.send(command); // After upload running cloudfront invalidation
    console.timeEnd('Cloudfront Invalidation');
  } catch (e) {
    console.error(e);
  }
})();
