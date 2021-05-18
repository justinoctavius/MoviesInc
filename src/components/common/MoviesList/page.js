import { renderCard } from '../../../helpers';
import Block from '../Block';
import Title from '../Title';

const MoviesListPage = ({ movies, title, main, onClick }) => {
  return (
    <Block bg="third" width="100vw" height="max-content" flex column mt2>
      <Block p1 className="list_title">
        <Title logo dataTest="Title">
          {title}
        </Title>
      </Block>
      <Block height="100%" p2 flex scrollX overflowYHidden>
        {movies && movies?.length > 0
          ? movies?.map((movie) => renderCard(movie, main, onClick))
          : renderCard({}, main, () => {}, true)}
      </Block>
    </Block>
  );
};

export default MoviesListPage;
