import { theme } from '../../../constants';
import Block from '../Block';
import Image from '../Image';
import Title from '../Title';

const Card = ({ movie, empty, onClick }) => {
  return (
    <Block
      pointer
      minW="13.5em"
      maxW="13.5em"
      height="20em"
      br1
      overflowHidden
      transition="0.3s"
      m1
      hover={`border: 1px solid ${theme.colors.warning}`}
      border
      onClick={() => onClick(movie.id)}
    >
      {empty ? (
        <Title flex middle center height="100%">
          Empty
        </Title>
      ) : (
        <Image src={movie.backdrop_path} key={movie.id} />
      )}
    </Block>
  );
};

export default Card;
