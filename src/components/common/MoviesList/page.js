import { renderCard } from '../../../helpers';
import Block from '../Block';
import Title from '../Title';

const MoviesListPage = ({ movies, title, main, onClick }) => {
  return (
    <Block
      bg="third"
      width="100vw"
      height="max-content"
      style={{ margin: '1em 0' }}
      flex
      column
    >
      <Block p1 className="list_title">
        <Title logo dataTest="Title">
          {title}
        </Title>
      </Block>
      <Block height="100%" p2 flex scrollX overflowYHidden>
        {movies && movies?.length > 0 ? (
          movies?.map((movie) => renderCard(movie, main, onClick))
        ) : (
          <Block p2 border>
            <Title>Empty</Title>
          </Block>
        )}
      </Block>
    </Block>
  );
};

export default MoviesListPage;
