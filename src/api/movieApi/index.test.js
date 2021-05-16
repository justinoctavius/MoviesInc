import movieApi from '.';

describe('Movie api', () => {
  describe('NowPlaying api', () => {
    it('Should return success in the now playing movies response msg', async () => {
      const expected = 'success';
      const result = (await movieApi.getNowPlaying()).msg;

      expect(result).toBe(expected);
    });
  });

  describe('Similar api', () => {
    it('Should return success in the similar movies response msg, passed an id', async () => {
      const expected = 'success';
      const result = (await movieApi.similar(2)).msg;

      expect(result).toBe(expected);
    });

    it(`Should return "The resource you requested could not be found." in similar movies response msg, not passed an id `, async () => {
      const expected = 'The resource you requested could not be found.';
      const result = (await movieApi.similar()).msg;

      expect(result).toBe(expected);
    });
  });

  describe('Details api', () => {
    it(`Should return success the movie details msg, passed an id`, async () => {
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
});
