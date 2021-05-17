import { shallow } from 'enzyme';
import renderCard from '.';
import Card from '../../components/common/Card';
import MainCard from '../../components/common/MainCard';

describe('RenderCard', () => {
  it(`Should return main card`, () => {
    const expected = MainCard;
    const result = renderCard([], true, () => {}).type;
    expect(result).toBe(expected);
  });

  it(`Should return card`, () => {
    const expected = Card;
    const result = renderCard([], false, () => {}).type;
    expect(result).toBe(expected);
  });
});
