import { Database } from 'sqlite3';

export function clearWordCountTable(db: Database): Promise<void> {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM WordCounts', err => {
      if (err) {
        console.error('Error clearing the table:', err);
        reject(err);
      } else {
        console.log('Previous records cleared.');
        resolve();
      }
    });
  });
}
