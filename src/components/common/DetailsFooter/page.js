import Actors from '../Actors';
import Block from '../Block';
import Button from '../Button';
import Rate from '../Rate';

const DetailsFooterPage = ({ vote_average, id, actors, addFavorite }) => {
  return (
    <Block grid columns="1fr 1fr" s2={s2.details_footer}>
      <Block p2 flex column middle s2={s2.details_action}>
        <Button text={'Add to favorite'} onClick={addFavorite} />
        <Rate initialRate={vote_average} id={id} />
      </Block>
      <Actors actors={actors} />
    </Block>
  );
};

const s2 = {
  details_action: `flex-direction: row; align-items: center; justify-content: space-around;`,
  details_footer: `grid-template-columns: 1fr; grid-template-rows: min-content 1fr;`,
};

export default DetailsFooterPage;
