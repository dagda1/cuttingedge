import program from 'commander';

program
  .description('Start and watch some scripts based on something')
  .helpOption('-h, --help', 'show help')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .action(async (_, options = []) => {
    await Promise.resolve('herman');
  });

program.parse(process.argv);
