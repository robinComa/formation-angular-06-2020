import { TruncatePipe } from './truncate.pipe';

fdescribe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should truncate', () => {
    const str = 'hello world !!!';
    const pipe = new TruncatePipe();
    const result = pipe.transform(str, 8);
    expect(result).toBe('hello...');
  });

  it('should truncate with correct length', () => {
    const str = 'hello world !!!';
    const length = 8;
    const pipe = new TruncatePipe();
    const result = pipe.transform(str, length);
    expect(result.length).toBe(length);
  });

  it('should not truncate', () => {
    const str = 'hello world !!!';
    const pipe = new TruncatePipe();
    const result = pipe.transform(str, 1000);
    expect(result).toBe(str);
  });

  it('should manage undefined string', () => {
    const str = undefined;
    const pipe = new TruncatePipe();
    const result = pipe.transform(str, 1000);
    expect(result).toBe(str);
  });
});
