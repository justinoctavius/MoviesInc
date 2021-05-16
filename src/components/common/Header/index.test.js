import { shallow } from 'enzyme';
import Header from '.';
import HeaderPage from './page';

describe('Header', () => {
  it(`Should render a HeaderPage`, () => {
    const wrapper = shallow(<Header />);
    const expected = true;
    const result = wrapper.find({ dataTest: 'HeaderPage' }).exists();

    expect(result).toBe(expected);
  });
});
