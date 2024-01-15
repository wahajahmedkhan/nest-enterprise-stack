import { fileReader } from './file-reader';

describe('shellTextAnalysisFileReader', () => {
  it('should work', async () => {
    expect(await fileReader('app')).toEqual('shell-text-analysis-file-reader');
  });
});
