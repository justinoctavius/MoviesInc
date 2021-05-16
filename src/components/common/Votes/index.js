import { theme } from '../../../constants';

const Votes = ({ vote }) => {
  return (
    <>
      <div className="vote">
        <strong>{vote}</strong>
      </div>
      <style jsx>
        {`
          .vote {
            position: absolute;
            padding: ${theme.paddings.p1};
            background-color: ${theme.colors.warning};
            color: ${theme.colors.third};
            font-size: ${theme.sizes.small};
            font-family: ${theme.fonts.small};
            font-weight: bold;
            border-radius: 0 0.5em 0 0;
            bottom: 0px;
          }
        `}
      </style>
    </>
  );
};

export default Votes;
