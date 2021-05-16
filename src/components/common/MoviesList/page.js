import { theme } from '../../../constants';
import Image from '../Image';
import Title from '../Title';

const MoviesListPage = ({ movies, title, onClick }) => {
  console.log(movies);
  return (
    <>
      <div className="list_container">
        <div className="list_title">
          <Title logo dataTest="Title">
            {title}
          </Title>
        </div>
        <div className="list_cards">
          {movies &&
            movies.map((movie) => (
              <div className="card" onClick={() => onClick(movie.id)}>
                <Image src={movie.backdrop_path} key={movie.id} />
              </div>
            ))}
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
          .card {
            cursor: pointer;
            min-width: 13.5em;
            height: 20em;
            border-radius: 1em;
            overflow: hidden;
            margin: ${theme.margins.m1};
            border: 1px solid ${theme.colors.secondary};
            transition: 0.3s;
          }
          .card:hover {
            border: 1px solid ${theme.colors.warning};
          }
        `}
      </style>
    </>
  );
};

export default MoviesListPage;
