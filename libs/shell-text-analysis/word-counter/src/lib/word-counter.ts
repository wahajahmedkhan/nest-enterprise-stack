import {
  closeMemoryDb,
  connectToMemoryDb,
} from '@nest-enterprise-stack/shared/database/memory';
import {
  addWordCountToTable,
  initiliazeWordCountTable,
} from '@nest-enterprise-stack/shell-text-analysis/data-access';
import { mapSync, split } from 'event-stream';
import { createReadStream } from 'fs';
import { Database } from 'sqlite3';

export async function wordCounter(filePaths: Array<string>) {
  const db = connectToMemoryDb();
  await initiliazeWordCountTable(db);

  for (const filePath of filePaths) {
    await new Promise<void>((resolve, reject) => {
      createReadStream(filePath, 'utf8')
        .pipe(split())
        .pipe(
          mapSync((line: string) => processLine(line, db))
            .on('error', err => {
              console.error('Error processing file:', err);
              reject(err);
            })
            .on('end', () => resolve()),
        );
    });
  }

  closeMemoryDb(db);
}

async function processLine(line: string, db: Database) {
  const words = line.split(/\s+/g);
  const minimumWordLength = 2;
  for (const word of words) {
    const normalizedWord = word.toLowerCase().replace(/[^a-z]/g, '');
    if (
      normalizedWord.length > minimumWordLength &&
      !isCommonWord(normalizedWord)
    ) {
      await addWordCountToTable(db, word);
    }
  }
}

function isCommonWord(word: string) {
  const commonWords = ['the', 'and', 'of', 'to', 'in', 'a', 'is'];

  return commonWords.includes(word);
}
