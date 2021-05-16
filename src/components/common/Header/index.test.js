import { render, shallow } from 'enzyme';
import Header from '.';
import { REQUEST_TOKEN } from '../../../constants';
import HeaderPage from './page';

describe('Header', () => {
  it(`Should render a HeaderPage`, () => {
    const wrapper = shallow(<Header />);
    const expected = true;
    const result = wrapper.find({ dataTest: 'HeaderPage' }).exists();

    expect(result).toBe(expected);
  });

  describe('HeaderPage', () => {
    it(`Should render a Logo`, () => {
      const wrapper = shallow(<HeaderPage />);
      const expected = true;
      const result = wrapper.find({ dataTest: 'Logo' }).exists();

      expect(result).toBe(expected);
    });

    it(`Should render a Sign-in button`, () => {
      const wrapper = shallow(<HeaderPage />);
      const expected = true;
      const result = wrapper.find({ dataTest: 'SignIn' }).exists();

      expect(result).toBe(expected);
    });
  });
});
