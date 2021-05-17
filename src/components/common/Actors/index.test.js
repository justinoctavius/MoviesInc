import { shallow } from 'enzyme';
import Actors from '.';
import { movieApi } from '../../../api';
import { getActors } from '../../../helpers';

describe('Actors', () => {
  let wrapper;
  let actors;
  beforeAll(async () => {
    actors = await getActors((await movieApi.getCredits(2)).payload);
    wrapper = shallow(<Actors actors={actors} />);
  });
  it('Should render all the actors', () => {
    const expected = actors?.length;
    const result = wrapper.find('.actors ul li').length;

    expect(result).toBe(expected);
  });
});
