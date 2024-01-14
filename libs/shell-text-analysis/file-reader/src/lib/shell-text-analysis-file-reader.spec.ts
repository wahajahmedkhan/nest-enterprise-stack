import { shellTextAnalysisFileReader } from './shell-text-analysis-file-reader';

describe('shellTextAnalysisFileReader', () => {
  it('should work', () => {
    expect(shellTextAnalysisFileReader()).toEqual(
      'shell-text-analysis-file-reader',
    );
  });
});
