import Block from '../Block';
import Button from '../Button';
import Logo from '../Logo';
import { theme } from './../../../constants';

const HeaderPage = ({ signInHandler, logoutHandler, isSignIn }) => {
  return (
    <Block
      flex
      spaceBetween
      middle
      bg="primary"
      secondary
      p2
      sticky
      top="0px"
      zIndex1
      style={{ borderBottom: '1px solid' }}
    >
      <Logo dataTest="Logo" />
      <Button
        text={isSignIn ? 'Logout' : 'Sign-in'}
        onClick={isSignIn ? logoutHandler : signInHandler}
        dataTest="SignIn"
      />
    </Block>
  );
};

export default HeaderPage;
