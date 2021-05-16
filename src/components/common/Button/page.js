import { theme } from '../../../constants';

const ButtonPage = ({ text, onClick, color }) => {
  return (
    <>
      <div onClick={onClick} className="button">
        <p className="button_text">{text}</p>
      </div>
      <style jsx>
        {`
          .button {
            padding: ${theme.paddings.p1};
            border: ${theme.colors.secondary} 1px solid;
            background-color: ${theme.colors.third};
            cursor: pointer;
            transition: 0.3s;
          }
          .button:hover,
          .button:active {
            background-color: ${theme.colors.secondary};
            color: ${theme.colors.third};
          }
          .button_text {
            text-align: center;
            font-size: ${theme.sizes.small};
            margin: 0;
          }
        `}
      </style>
    </>
  );
};

export default ButtonPage;
