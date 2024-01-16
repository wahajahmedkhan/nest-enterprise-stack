import { getWordCountFromTable } from '@nest-enterprise-stack/shell-text-analysis/data-access';
import { Database } from 'sqlite3';

export async function reportGenerator(
  db: Database,
  rows: number,
): Promise<void> {
  const data = await getWordCountFromTable(db, rows);

  data.forEach(({ word, count }) => console.log(`${word}: ${count}`));
}
