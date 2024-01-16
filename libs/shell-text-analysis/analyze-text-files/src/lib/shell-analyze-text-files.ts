import { fileReader } from '@nest-enterprise-stack/shell-text-analysis/file-reader';
import { wordCounter } from '@nest-enterprise-stack/shell-text-analysis/word-counter';

export async function shellAnalyzeTextFiles(
  directory: string,
  rows: number,
): Promise<void> {
  const filePaths = await fileReader(directory);
  await wordCounter(filePaths);
}
