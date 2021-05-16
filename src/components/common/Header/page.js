import Logo from '../Logo';
import { theme } from './../../../constants';

const HeaderPage = () => {
  return (
    <>
      <div className="header">
        <Logo />
        <div className="header_loginBtn">login</div>
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            color: ${theme.colors.secondary};
            padding: ${theme.paddings.p1};
            position: sticky;
            border-bottom: 1px solid ${theme.colors.secondary};
          }
        `}
      </style>
    </>
  );
};

export default HeaderPage;
