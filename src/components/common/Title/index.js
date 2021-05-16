import { theme } from '../../../constants';

const Title = ({ children, logo }) => {
  return (
    <>
      <h1>{children}</h1>
      <style jsx>{`
        h1 {
          text-align: center;
          font-size: ${theme.sizes.title};
          font-family: ${logo ? theme.fonts.logo : theme.fonts.title};
          color: ${theme.colors.secondary};
        }
      `}</style>
    </>
  );
};

export default Title;
