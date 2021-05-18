import { shallow } from 'enzyme';
import HomeScreen from '.';
import HomeScreenPage from './page';

describe('Home screen page', () => {
  let favorite = [];
  let nowPlaying = [];
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(
      <HomeScreenPage favorites={favorite} nowPlaying={nowPlaying} />
    );
  });

  it('should render mainMovieListComponent', () => {
    const expected = true;
    const result = wrapper.find({ dataTest: 'MainMoviesList' }).exists();

    expect(expected).toBe(result);
  });

  it('Should render MoviesList', () => {
    const expected = true;
    const result = wrapper.find({ dataTest: 'MoviesList' }).exists();

    expect(expected).toBe(result);
  });
});

describe('Home screen', () => {
  let wrapper;
  let favorite;
  let nowPlaying;
  beforeAll(() => {
    wrapper = shallow(
      <HomeScreen favorites={favorite} nowPlaying={nowPlaying} />
    );
  });
});
