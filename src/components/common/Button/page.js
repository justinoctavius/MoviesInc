import { theme } from '../../../constants';
import Block from '../Block';

const ButtonPage = ({ text, onClick }) => {
  const hover = `background-color: ${theme.colors.secondary};
  color: ${theme.colors.third};`;
  return (
    <>
      <Block
        p1
        border
        bg="third"
        pointer
        width="max-content"
        height="min-content"
        onClick={onClick}
        className="button"
        transition="0.3s"
        hover={hover}
        active={hover}
      >
        <strong className="button_text">{text}</strong>
      </Block>
      <style jsx>
        {`
          .button_text {
            font-size: ${theme.sizes.small};
          }
          div:hover,
          div:active {
          }
        `}
      </style>
    </>
  );
};

export default ButtonPage;
