import {
  closeMemoryDb,
  connectToMemoryDb,
} from '@nest-enterprise-stack/shared/database/memory';
import { initializeWordCountTable } from '@nest-enterprise-stack/shell-text-analysis/data-access';
import { fileReader } from '@nest-enterprise-stack/shell-text-analysis/file-reader';
import { reportGenerator } from '@nest-enterprise-stack/shell-text-analysis/report-generator';
import { wordCounter } from '@nest-enterprise-stack/shell-text-analysis/word-counter';

export async function shellAnalyzeTextFiles(
  directory: string,
  rows: number,
): Promise<void> {
  const db = connectToMemoryDb();
  await initializeWordCountTable(db);

  const filePaths = await fileReader(directory);
  await wordCounter(db, filePaths);
  await reportGenerator(db, rows);

  closeMemoryDb(db);
}
