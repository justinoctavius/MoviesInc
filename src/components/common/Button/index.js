import ButtonPage from './page';

const Button = (props) => {
  const { text, onClick } = props;
  return <ButtonPage {...props} text={text} onClick={onClick} />;
};

export default Button;
