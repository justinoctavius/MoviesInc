import { envs } from '../../../../config';
import { theme } from '../../../constants';
import Title from '../Title';

const MainCardPage = ({ movie, onClick }) => {
  const { poster_path, title, vote_average, release_date } = movie;
  return (
    <>
      <div className="card_container" onClick={onClick}>
        <div className="card_imgContainer">
          <img src={`${envs.IMAGE_API}/${poster_path}`} />
        </div>
        <div className="card_body">
          <div className="card_title">
            <Title logo>{title}</Title>
          </div>
          <div className="card_info">
            <small>{vote_average}</small>
            <small>{release_date}</small>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .card_container {
            min-width: 20em;
            margin: 0 ${theme.margins.m1};
            height: 100%;
            border: 1px solid ${theme.colors.secondary};
            display: grid;
            grid-template-rows: 1fr 6em;
            cursor: pointer;
            transition: 0.3s;
          }
          .card_container:hover,
          .card_container:active {
            transform: scale(0.98);
            border: 1px solid ${theme.colors.warning};
          }
          .card_imgContainer img {
            height: 100%;
          }
          .card_imgContainer {
            text-align: center;
            overflow: hidden;
            background: #000;
          }
          .card_body {
            padding: ${theme.paddings.p1};
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .card_title {
            max-width: 19em;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: ${theme.colors.secondary};
          }
          .card_info {
            display: flex;
            justify-content: space-between;
            color: ${theme.colors.secondary};
            font-size: ${theme.sizes.small};
            font-family: ${theme.fonts.small};
          }
          @media (min-width: ${theme.screens.s3}) {
            .card_container {
              min-width: 35em;
            }
          }
        `}
      </style>
    </>
  );
};

export default MainCardPage;
