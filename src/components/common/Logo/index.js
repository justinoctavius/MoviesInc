import { theme } from '../../../constants';
import Link from 'next/link';

const Logo = () => {
  return (
    <>
      <Link href="/">
        <a>
          <strong>Movies-Inc</strong>
        </a>
      </Link>
      <style jsx>{`
        a {
          color: ${theme.colors.secondary};
          font-size: ${theme.sizes.logo};
          font-family: '${theme.fonts.logo}';
        }
      `}</style>
    </>
  );
};

export default Logo;
