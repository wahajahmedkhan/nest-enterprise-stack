import { Database, verbose } from 'sqlite3';

const sqlite3 = verbose();

export function connectToMemoryDb(): Database {
  return new sqlite3.Database(':memory:', err => {
    if (err) {
      console.error('Error opening database', err);
    } else {
      console.log('Connected to the in-memory SQLite database.');
    }
  });
}

export function closeMemoryDb(db: Database) {
  db.close(err => {
    if (err) {
      console.error('Error closing database', err);
    } else {
      console.log('Database connection closed.');
    }
  });
}
