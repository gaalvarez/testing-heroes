import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('weak si strength es 5', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('5 (weak)');
  });

  it('strong si strength está entre 10 y 20', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(10)).toEqual('10 (strong)');
  });

  it('unbelievable si strength es > 20', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(21)).toEqual('21 (unbelievable)');
  });
});
