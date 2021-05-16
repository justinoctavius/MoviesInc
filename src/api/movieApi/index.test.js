import movieApi from '.';

describe('Movie api', () => {
  describe('getNowPlaying api', () => {
    it('Should return success in the now playing movies response msg', async () => {
      const expected = 'success';
      const result = (await movieApi.getNowPlaying()).msg;

      expect(result).toBe(expected);
    });
  });

  describe('getSimilar api', () => {
    it('Should return a success msg when getSimilar is invoked, passed an id', async () => {
      const expected = 'success';
      const result = (await movieApi.getSimilar(2)).msg;

      expect(result).toBe(expected);
    });

    it(`Should return "The resource you requested could not be found." in similar movies response msg, not passed an id `, async () => {
      const expected = 'The resource you requested could not be found.';
      const result = (await movieApi.getSimilar()).msg;

      expect(result).toBe(expected);
    });
  });

  describe('getDetails api', () => {
    it(`Should returna success msg when getDetails is invoked, passed an id`, async () => {
      const expected = 'success';
      const result = (await movieApi.getDetails(2)).msg;

      expect(result).toBe(expected);
    });

    it(`Should return an error msg from the movie details msg, not passed an id`, async () => {
      const expected = 'success';
      const result = (await movieApi.getDetails()).msg;

      expect(result).not.toBe(expected);
    });
  });

  describe('getCredits', () => {
    it('Should return a success msg when getCredits is invoked, passed an in', async () => {
      const expected = 'success';
      const result = (await movieApi.getCredits(2)).msg;

      expect(result).toBe(expected);
    });
  });
});
