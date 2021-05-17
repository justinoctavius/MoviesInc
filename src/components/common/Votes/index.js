import { theme } from '../../../constants';
import Block from '../Block';

const Votes = ({ vote }) => {
  return (
    <>
      <Block
        absolute
        p1
        bg="warning"
        third
        bottom="0px"
        style={{ borderRadius: '0 0.5em 0 0' }}
      >
        <strong>{vote}</strong>
      </Block>
      <style jsx>
        {`
          strong {
            font-size: ${theme.sizes.small};
            font-family: ${theme.fonts.small};
            font-weight: bold;
            border-radius: 0 0.5em 0 0;
          }
        `}
      </style>
    </>
  );
};

export default Votes;
