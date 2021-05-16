import { Title } from '..';
import { theme } from '../../../constants';
import MainCard from '../MainCard';

const MainMoviesListPage = ({ movies, title }) => {
  return (
    <>
      <div className="list_container">
        <div className="list_title">
          <Title logo dataTest="Title">
            {title}
          </Title>
        </div>
        <div className="list_cards">
          {movies && movies.map((movie) => <MainCard movie={movie} />)}
        </div>
      </div>
      <style jsx>
        {`
          .list_container {
            background-color: ${theme.colors.third};
            height: 50vh;
            width: 100%;
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

export default MainMoviesListPage;
