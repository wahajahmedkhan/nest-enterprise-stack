import { Database } from 'sqlite3';
import { clearWordCountTable } from './clear-word-count-table';

export async function initializeWordCountTable(db: Database): Promise<void> {
  db.serialize(() => {
    db.run(
      'CREATE TABLE IF NOT EXISTS WordCounts (word TEXT PRIMARY KEY, count INTEGER)',
    );
  });

  await clearWordCountTable(db);
}
