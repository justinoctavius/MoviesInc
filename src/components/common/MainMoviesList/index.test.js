import { shallow } from 'enzyme';
import MainMoviesListPage from './page';
import MainMoviesList from './index';
import { movieApi } from '../../../api';

describe('MainMoviesList', () => {
  describe('MainMoviesListContainer', () => {
    it(`Should render the MainMoviesListPage`, () => {
      const wrapper = shallow(<MainMoviesList />);
      const expected = true;
      const result = wrapper.find({ dataTest: 'mainMoviesListPage' }).exists();

      expect(result).toBe(expected);
    });
  });

  describe('MainMoviesListPage', () => {
    let wrapper;
    let movies;
    beforeAll(async () => {
      movies = (await movieApi.getNowPlaying())?.payload?.results;
      wrapper = shallow(<MainMoviesListPage movies={movies} />);
    });
    it(`Should render the title`, () => {
      const expected = true;
      const result = wrapper.find({ dataTest: 'Title' }).exists();

      expect(result).toBe(expected);
    });

    it(`Should render the all MainCards`, async () => {
      const expected = movies.length;
      const result = (await wrapper.find('.list_cards')).prop(
        'children'
      ).length;

      expect(result).toBe(expected);
    });
  });
});
