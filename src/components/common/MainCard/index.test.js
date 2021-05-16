import { shallow } from 'enzyme';
import MainCard from '.';

describe(`MainCard`, () => {
  it(`Should render MainCardPage`, () => {
    const expected = true;
    const result = shallow(<MainCard />)
      .find({ dataTest: 'MainCardPage' })
      .exists();

    expect(result).toBe(expected);
  });
});
