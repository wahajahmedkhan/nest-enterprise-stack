import { IWordCountModel } from '@nest-enterprise-stack/shell-text-analysis/types';
import { Database } from 'sqlite3';

export function getWordCountFromTable(
  db: Database,
  rows: number,
): Promise<Array<IWordCountModel>> {
  return new Promise((resolve, reject) => {
    db.all(
      'SELECT word, count FROM WordCounts ORDER BY count DESC LIMIT ?',
      // eslint-disable-next-line no-magic-numbers
      rows,
      (err, rows: Array<IWordCountModel>) => {
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
