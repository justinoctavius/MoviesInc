import { theme } from '../../../constants';
import Image from '../Image';
import Title from '../Title';

const Card = ({ movie, empty, onClick }) => {
  return (
    <>
      <div
        className={`card ${empty && 'empty'}`}
        onClick={() => onClick(movie.id)}
      >
        {empty ? (
          <Title>Empty</Title>
        ) : (
          <Image src={movie.backdrop_path} key={movie.id} />
        )}
      </div>
      <style jsx>
        {`
          .card {
            cursor: pointer;
            min-width: 13.5em;
            max-width: 13.5em;
            height: 20em;
            border-radius: 1em;
            overflow: hidden;
            margin: 0 ${theme.margins.m1};
            border: 1px solid ${theme.colors.secondary};
            transition: 0.3s;
          }
          .card:hover {
            border: 1px solid ${theme.colors.warning};
          }
          .card.empty {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default Card;
