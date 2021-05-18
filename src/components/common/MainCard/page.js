import { envs } from '../../../../config';
import { theme } from '../../../constants';
import Block from './../Block';
import Title from '../Title';
import Image from '../Image';

const MainCardPage = ({ movie, onClick }) => {
  const { poster_path, title, vote_average, release_date } = movie;

  const hover = `transform: scale(0.98);
  border: 1px solid ${theme.colors.warning};`;

  return (
    <>
      <Block
        minW="20em"
        m1
        height="95%"
        border
        grid
        rows="1fr 6em"
        pointer
        s3={`min-width: 35em;`}
        transition="0.3s"
        hover={hover}
        onClick={onClick}
      >
        <Image src={poster_path} vote={vote_average} />
        <Block p1 flex column middle spaceBetween>
          <div className="card_title">
            <Title logo>{title}</Title>
          </div>
          <Block secondary flex center>
            <small>{release_date}</small>
          </Block>
        </Block>
      </Block>
      <style jsx>
        {`
          .card_title {
            max-width: 19em;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: ${theme.colors.secondary};
          }
          small {
            font-size: ${theme.sizes.small};
          }
        `}
      </style>
    </>
  );
};

export default MainCardPage;
