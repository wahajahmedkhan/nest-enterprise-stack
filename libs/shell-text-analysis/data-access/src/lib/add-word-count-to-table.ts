import { Database } from 'sqlite3';

export function addWordCountToTable(db: Database, word: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    db.run(
      'INSERT INTO WordCounts (word, count) VALUES (?, 1) ON CONFLICT(word) DO UPDATE SET count = count + 1',
      word,
      (err: string) => {
        if (err) {
          console.error('Error adding record to database', err);
          reject(err);
        } else {
          resolve();
        }
      },
    );
  });
}
