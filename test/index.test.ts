import Timestamp from '../src';

describe('Timestamp', () => {
  let time: Timestamp;
  beforeAll(() => {
    time = new Timestamp();
  });
  it('init', () => {
    expect(time).toBeTruthy();
  });
  it('start & stop', () => {
    const before = Date.now();
    const label = 'test';
    time.start(label);
    time.stop(label);
    const elapsed = Date.now() - before;
    const info = time.get(label);
    expect(info).toBeTruthy();
    expect(info.started >= before).toBeTruthy();
    if (typeof info.elapsed === 'undefined')
      throw new Error('Elapsed must be defined after stop');
    expect(info.elapsed).toBeTruthy();
    expect(info.elapsed <= elapsed).toBeTruthy();
  });
});
