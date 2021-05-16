import { shallow } from 'enzyme';
import MoviesListPage from './page';
import MoviesList from './index';

describe('MoviesList', () => {
  describe('MoviesListContainer', () => {
    it(`Should render the MoviesListPage`, () => {
      const wrapper = shallow(<MoviesList />);
      const expected = true;
      const result = wrapper.find({ dataTest: 'moviesListPage' }).exists();

      expect(result).toBe(expected);
    });
  });
});
