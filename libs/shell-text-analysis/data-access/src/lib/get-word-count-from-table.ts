import { Database } from 'sqlite3';

export function getWordCountFromTable(db: Database) {
  return new Promise((resolve, reject) => {
    db.all(
      'SELECT word, count FROM WordCounts ORDER BY count DESC LIMIT ?',
      // eslint-disable-next-line no-magic-numbers
      20,
      (err, rows) => {
        if (err) {
          console.error('Error fetching word counts from database', err);
          reject(err);
        } else {
          resolve(rows);
        }
      },
    );
  });
}
