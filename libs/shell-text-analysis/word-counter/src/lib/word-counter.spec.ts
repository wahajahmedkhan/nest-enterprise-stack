import { shellTextAnalysisWordCounter } from './word-counter';

describe('shellTextAnalysisWordCounter', () => {
  it('should work', () => {
    expect(shellTextAnalysisWordCounter()).toEqual(
      'shell-text-analysis-word-counter',
    );
  });
});
