import Block from '../Block';
import Title from '../Title';

const DetailsBody = ({ movie }) => {
  return (
    <>
      <Block p2 grid rows="min-content 1fr min-content" s2={s2.details_body}>
        <Block relative>
          <Title logo>{movie.title}</Title>
          <small>{movie.release_date}</small>
        </Block>
        <Block scrollY p1 title txtCenter>
          <p>{movie.overview}</p>
        </Block>
      </Block>
      <style jsx>
        {`
          small {
            position: absolute;
            top: 25%;
            right: 2em;
          }
        `}
      </style>
    </>
  );
};

const s2 = {
  details_container: `grid-template-columns: 1fr 2fr; grid-template-rows: 1fr;`,
};

export default DetailsBody;
