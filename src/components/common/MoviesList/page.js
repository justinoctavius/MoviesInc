import { theme } from '../../../constants';
import Card from '../Card';
import Image from '../Image';
import MainCard from '../MainCard';
import Title from '../Title';

const MoviesListPage = ({ movies, title, onClick, main }) => {
  const renderCard = (movie, empty = false) => {
    return main ? (
      <MainCard movie={movie} key={movie.id} onClick={onClick} />
    ) : (
      <Card movie={movie} key={movie.id} empty={empty} onClick={onClick} />
    );
  };
  return (
    <>
      <div className="list_container">
        <div className="list_title">
          <Title logo dataTest="Title">
            {title}
          </Title>
        </div>
        <div className="list_cards">
          {movies && movies?.length > 0 ? (
            movies?.map((movie) => renderCard(movie))
          ) : (
            <div className="card empty">
              <Title>Empty</Title>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .list_container {
            background-color: ${theme.colors.third};
            width: 100vw;
            margin: ${theme.margins.m1} 0;
            display: flex;
            flex-direction: column;
          }
          .list_title,
          .list_cards {
            padding: ${theme.paddings.p2};
          }
          .list_cards {
            height: 100%;
            display: flex;
            overflow-x: scroll;
          }
        `}
      </style>
    </>
  );
};

export default MoviesListPage;
