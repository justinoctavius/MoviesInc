import { shallow } from 'enzyme';
import DetailsScreen from '.';
import DetailsScreenPage from './page';

describe(`DetailsScreen`, () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<DetailsScreen data={{}} />);
  });
  it(`Should render DetailsScreenPage`, () => {
    const expected = true;
    const result = wrapper.find({ dataTest: 'DetailsScreenPage' }).exists();

    expect(result).toBe(expected);
  });
});
