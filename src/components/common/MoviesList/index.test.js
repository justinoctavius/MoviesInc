import { shallow } from 'enzyme';
import MoviesListPage from './page';
import MoviesList from './index';

const data = [
  {
    poster_path: '123.jpg',
    title: 'test',
    vote_average: 9,
    release_date: '10/9/2021',
    id: 1,
  },
];

describe('MoviesList', () => {
  let wrapper;
  beforeAll(async () => {
    wrapper = shallow(<MoviesList movies={data} title={'test'} />);
  });
  it(`Should render the MoviesListPage`, () => {
    const expected = true;
    const result = wrapper.find({ dataTest: 'moviesListPage' }).exists();

    expect(result).toBe(expected);
  });
});

describe('MoviesListPage', () => {
  let wrapperMain;
  let wrapperNormal;
  beforeAll(async () => {
    wrapperMain = shallow(<MoviesListPage main movies={data} title="test" />);
    wrapperNormal = shallow(<MoviesListPage movies={data} title="test" />);
  });
  it(`Should render main cards when the main prop is passed`, () => {
    const expected = true;
    const result = wrapperMain.find({ dataTest: 'MainCard' }).exists();
    expect(result).toBe(expected);
  });

  it(`Should NO render normal cards when the main prop is passed`, () => {
    const expected = false;
    const result = wrapperMain.find({ dataTest: 'Card' }).exists();
    expect(result).toBe(expected);
  });

  it(`Should render normal cards when the main prop is not passed`, () => {
    const expected = true;
    const result = wrapperNormal.find({ dataTest: 'Card' }).exists();
    expect(result).toBe(expected);
  });

  it(`Should NO render main cards when the main prop is not passed`, () => {
    const expected = false;
    const result = wrapperNormal.find({ dataTest: 'MainCard' }).exists();
    expect(result).toBe(expected);
  });
});
