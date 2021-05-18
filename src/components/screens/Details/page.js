import { Block, Image, MoviesList } from '../../common';
import DetailsBody from '../../common/DetailsBody';
import DetailsFooter from '../../common/DetailsFooter';

const DetailsScreenPage = ({ movie, similar, actors }) => {
  return (
    <Block grid rows="80%" column="20%" mt1 mb1 s2={s2.container}>
      <Block
        grid
        rows="50% 30% 1fr"
        borderTop
        borderBottom
        bg="third"
        secondary
        overflowHidden
        s2={s2.details_container}
      >
        <Image vote={movie.vote_average} src={movie.backdrop_path} />
        <DetailsBody movie={movie} />
        <DetailsFooter actors={actors} movie={movie} />
      </Block>
      <MoviesList movies={similar} title="Similar" />
    </Block>
  );
};

const s2 = {
  container: `height: 95vh; grid-template-rows: 1fr 1fr;`,
  details_container: `grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr;`,
};

export default DetailsScreenPage;
