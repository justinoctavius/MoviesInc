import { theme } from '../../../constants';
const { colors, sizes, fonts } = theme;

const Title = ({ children, logo, third }) => {
  const color = [third ? colors.third : colors.secondary];
  return (
    <>
      <h1>{children}</h1>
      <style jsx>{`
        h1 {
          text-align: center;
          font-size: ${sizes.title};
          font-family: ${logo ? fonts.logo : fonts.title};
          color: ${color};
        }
      `}</style>
    </>
  );
};

export default Title;
