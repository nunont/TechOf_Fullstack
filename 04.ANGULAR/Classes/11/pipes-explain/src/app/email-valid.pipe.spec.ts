import { EmailValidPipe } from './email-valid.pipe';

describe('EmailValidPipe', () => {
  it('create an instance', () => {
    const pipe = new EmailValidPipe();
    expect(pipe).toBeTruthy();
  });
});
