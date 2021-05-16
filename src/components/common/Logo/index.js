import { theme } from '../../../constants';

const Logo = () => {
  return (
    <>
      <strong>Movies-Inc</strong>
      <style jsx>{`
        strong {
          font-size: ${theme.sizes.logo};
          font-family: '${theme.fonts.logo}';
        }
      `}</style>
    </>
  );
};

export default Logo;
