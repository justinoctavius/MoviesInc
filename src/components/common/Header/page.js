import Button from '../Button';
import Logo from '../Logo';
import { theme } from './../../../constants';

const HeaderPage = ({ signInHandler }) => {
  return (
    <>
      <div className="header">
        <Logo dataTest="Logo" />
        <Button text="Sign-in" onClick={signInHandler} dataTest="SignIn" />
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: ${theme.colors.secondary};
            padding: ${theme.paddings.p2};
            position: sticky;
            border-bottom: 1px solid ${theme.colors.secondary};
          }
        `}
      </style>
    </>
  );
};

export default HeaderPage;
