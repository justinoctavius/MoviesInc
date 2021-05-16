import userApi from '.';

describe('UserApi', () => {
  it('Should return a request_token', async () => {
    const expected = 'success';
    const result = (await userApi.requestToken()).msg;

    expect(result).toBe(expected);
  });

  it('Should return session denied when try to sign-in without a user validation', async () => {
    const request_token = (await userApi.requestToken()).payload;
    const expected = 'Session denied.';
    const result = (await userApi.signIn(request_token)).msg;

    expect(result).toBe(expected);
  });
});
