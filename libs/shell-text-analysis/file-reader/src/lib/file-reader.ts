import { readdir } from 'fs/promises';
import { resolve } from 'path';

export async function fileReader(directory: string): Promise<Array<string>> {
  const filesInPath = await readdir(directory, { withFileTypes: true });

  const files = await Promise.all(
    filesInPath.map(fileInPath => {
      const resolvedPath = resolve(directory, fileInPath.name);

      return fileInPath.isDirectory() ? fileReader(resolvedPath) : resolvedPath;
    }),
  );

  return files.flat();
}
