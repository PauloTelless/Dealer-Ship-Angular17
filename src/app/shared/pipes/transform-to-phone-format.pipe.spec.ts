import { TransformToPhoneFormatPipe } from './transform-to-phone-format.pipe';

describe('TransformToPhoneFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new TransformToPhoneFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
