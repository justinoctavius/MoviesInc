import { theme } from '../../../constants';
import { Actors, Button, Image, MoviesList, Title } from '../../common';
import Rate from '../../common/Rate';

const DetailsScreenPage = ({ movie, similar, actors, addFavoriteHandler }) => {
  return (
    <>
      <div className="container">
        <div className="details_container">
          <Image vote={movie.vote_average} src={movie.backdrop_path} />
          <div className="details_body">
            <div className="details_title">
              <Title logo>{movie.title}</Title>
              <small>{movie.release_date}</small>
            </div>
            <p className="details_description">{movie.overview}</p>
            <div className="details_footer">
              <div className="details_action">
                <Button text={'Add to favorite'} onClick={addFavoriteHandler} />
                <Rate initialRate={movie.vote_average} id={movie.id} />
              </div>
              <div className="details_actors">
                <Actors actors={actors} />
              </div>
            </div>
          </div>
        </div>
        <MoviesList movies={similar} title="Similar" />
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-rows: 80% 20%;
            margin: ${theme.margins.m1} 0;
          }
          .details_container {
            display: grid;
            grid-template-rows: 50% 50%;
            border-top: 1px solid ${theme.colors.secondary};
            border-bottom: 1px solid ${theme.colors.secondary};
            background: ${theme.colors.third};
            color: ${theme.colors.secondary};
          }
          .details_footer {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .details_title {
            position: relative;
          }
          .details_body {
            padding: ${theme.paddings.p2};
            display: grid;
            grid-template-rows: min-content 1fr min-content;
          }
          .details_title > small {
            position: absolute;
            top: 0px;
            right: 0px;
          }
          .details_action {
            padding: ${theme.paddings.p2};
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .details_actors {
            max-height: 10em;
            overflow-y: scroll;
          }
          .details_description {
            font-size: ${theme.sizes.title};
            padding: ${theme.paddings.p1};
            overflow-y: scroll;
            text-align: center;
          }
          @media (min-width: ${theme.screens.s2}) {
            .container {
              height: 50vh;
              grid-template-rows: min-content min-content;
            }
            .details_container {
              grid-template-columns: 1fr 2fr;
              grid-template-rows: 1fr;
            }
            .details_body {
              grid-template-rows: 5em 1fr;
              grid-template-columns: 1fr 1fr;
            }
            .details_title {
              grid-column: 1 / span 2;
              grid-row: 1/1;
            }
            .details_actors {
              min-height: 20em;
              max-height: min-height;
            }
            .details_footer {
              grid-row: 2;
              grid-column: 2;
              grid-template-columns: 1fr;
              grid-template-rows: min-content 1fr;
            }
          } ;
        `}
      </style>
    </>
  );
};

export default DetailsScreenPage;
