import { useSignIn } from '../../hooks';
import HeaderPage from './page';

const Header = () => {
  const { state, validatePermissions } = useSignIn();

  const signInHandler = async () => {
    await validatePermissions();
  };
  return <HeaderPage dataTest="HeaderPage" signInHandler={signInHandler} />;
};

export default Header;
