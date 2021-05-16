import { theme } from '../../../constants';
import Title from '../Title';

const Actors = ({ actors }) => {
  console.log(actors);
  return (
    <>
      <div className="container">
        <div className="title">
          <Title>Actors</Title>
        </div>
        <div className="actors">
          <ul>
            {actors?.length > 0 &&
              actors?.map((actor) => (
                <li>
                  {actor?.original_name} {' as '} {actor?.character}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <style jsx>{`
        .title {
          padding: ${theme.paddings.p1};
        }
        .actors ul {
          margin: 0 1em;
          list-style: square;
        }
      `}</style>
    </>
  );
};

export default Actors;
