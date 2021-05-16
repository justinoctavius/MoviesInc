import { shallow } from 'enzyme';
import MainMoviesListPage from './page';
import MainMoviesList from './index';

describe('MainMoviesList', () => {
  describe('MainMoviesListContainer', () => {
    it(`Should render the MainMoviesListPage`, () => {
      const wrapper = shallow(<MainMoviesList />);
      const expected = true;
      const result = wrapper.find({ dataTest: 'mainMoviesListPage' }).exists();

      expect(result).toBe(expected);
    });
  });
});
