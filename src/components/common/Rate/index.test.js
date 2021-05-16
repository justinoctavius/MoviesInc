import { shallow } from 'enzyme';
import Rate from '.';

describe(`Rate`, () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Rate initialRate={3} id={2} />);
  });
  it(`Should render RatePage`, () => {
    const expected = true;
    const result = wrapper.find({ dataTest: 'RatePage' }).exists();

    expect(result).toBe(expected);
  });
});
