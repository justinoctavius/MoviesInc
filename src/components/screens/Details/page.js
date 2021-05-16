import { theme } from '../../../constants';
import { Actors, Button, Image, Title } from '../../common';

const DetailsScreenPage = ({ movie, actors }) => {
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
                <Button text={'Add to favorite'} />
                <br />
                <Title>Rate</Title>
              </div>
              <Actors actors={actors} />
            </div>
          </div>
        </div>
        <div>hola</div>
      </div>
      <style jsx>
        {`
          .container {
            height: 100vh;
            overflow: hidden;
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
            height: 90%;
            padding: ${theme.paddings.p2};
            display: grid;
            grid-template-rows: 2em 1fr 10em;
          }
          .details_title > small {
            position: absolute;
            top: 0px;
            right: 0px;
            text-align: right;
          }
          .details_action {
            padding: ${theme.paddings.p2};
          }
          .details_description {
            font-size: ${theme.sizes.title};
            padding: ${theme.paddings.p1};
            overflow: scroll;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};

export default DetailsScreenPage;
