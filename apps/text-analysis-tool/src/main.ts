import { fileReader } from '@nest-enterprise-stack/shell-text-analysis/file-reader';
import { Command } from 'commander';
const program = new Command();

program
  .name('text-analysis-tool')
  .description('CLI tool to analyze text files and report most frequent words.')
  .version('1.0.0');

program
  .argument('<directory>', 'directory to analyze text files')
  .argument('<number>', 'number of top frequent words to report', parseInt)
  .action(async (directory, number) => {
    console.log(`Analyzing files in: ${directory}`);
    console.log(`Reporting top ${number} words`);

    console.log(await fileReader(directory));

    // Call your text analysis function here
    // analyzeTextFiles(directory, number);
  });

program.parse(process.argv);
