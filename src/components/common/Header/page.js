import Button from '../Button';
import Logo from '../Logo';
import { theme } from './../../../constants';

const HeaderPage = ({ signInHandler, logoutHandler, isSignIn }) => {
  return (
    <>
      <div className="header">
        <Logo dataTest="Logo" />
        <Button
          text={isSignIn ? 'Logout' : 'Sign-in'}
          onClick={isSignIn ? logoutHandler : signInHandler}
          dataTest="SignIn"
        />
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: ${theme.colors.primary};
            color: ${theme.colors.secondary};
            padding: ${theme.paddings.p2};
            position: sticky;
            top: 0px;
            border-bottom: 1px solid ${theme.colors.secondary};
            z-index: 9;
          }
        `}
      </style>
    </>
  );
};

export default HeaderPage;
