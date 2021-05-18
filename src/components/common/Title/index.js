import { theme } from '../../../constants';
import Block from '../Block';
const { colors, sizes, fonts } = theme;

const Title = (props) => {
  const { children, logo } = props;
  return (
    <>
      <Block {...props} title secondary txtCenter>
        <h1>{children}</h1>
      </Block>
      <style jsx>{`
        h1 {
          font-family: ${logo ? fonts.logo : fonts.title};
        }
      `}</style>
    </>
  );
};

export default Title;
