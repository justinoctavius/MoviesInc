import getActors from '.';
import { movieApi } from '../../api';

describe('GetActors', () => {
  let actors;
  beforeAll(async () => {
    actors = await getActors((await movieApi.getCredits(2)).payload);
  });
  it(`Should return a list of actors`, async () => {
    const expected = actors.length;

    expect(expected).toBeGreaterThan(0);
  });

  it(`Should return only actors`, async () => {
    const expected = 'Acting';
    const result = actors[0].known_for_department;

    expect(expected).toBe(result);
  });
});
