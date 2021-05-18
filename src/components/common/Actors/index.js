import Block from '../Block';
import Title from '../Title';

const Actors = ({ actors }) => {
  const renderActor = (actor) => {
    return (
      actor && (
        <li key={actor?.id}>
          {actor?.original_name + ' as ' + actor?.character}
        </li>
      )
    );
  };
  return (
    <>
      <Block
        scrollY
        maxH="10em"
        s2={`min-height: 90%;
              max-height: min-height;`}
      >
        <Block bg="third" sticky top="0px" p1>
          <Title>Actors</Title>
        </Block>
        <Block small>
          <ul>
            {actors?.length > 0 && actors?.map((actor) => renderActor(actor))}
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
