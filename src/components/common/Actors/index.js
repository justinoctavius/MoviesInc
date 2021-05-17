import { theme } from '../../../constants';
import Block from '../Block';
import Title from '../Title';

const Actors = ({ actors }) => {
  return (
    <>
      <Block>
        <Block p1>
          <Title>Actors</Title>
        </Block>
        <Block className="actors">
          <ul>
            {actors?.length > 0 &&
              actors?.map((actor) => (
                <li key={actor?.id}>
                  {actor?.original_name} {' as '} {actor?.character}
                </li>
              ))}
          </ul>
        </Block>
      </Block>
      <style jsx>{`
        ul {
          margin: 0 1em;
          list-style: square;
        }
      `}</style>
    </>
  );
};

export default Actors;
