import { theme } from '../../../constants';
import Block from '../Block';

const Button = ({ text, onClick }) => {
  return (
    <Block
      p1
      border
      bg="third"
      pointer
      width="max-content"
      height="min-content"
      onClick={onClick}
      transition="0.3s"
      hover={hover}
      active={hover}
      small
    >
      <strong>{text}</strong>
    </Block>
  );
};

const hover = `background-color: ${theme.colors.secondary}; color: ${theme.colors.third};`;

export default Button;
