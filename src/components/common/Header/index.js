import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SESSION_ID } from '../../../constants';
import { useSignIn } from '../../hooks';
import HeaderPage from './page';

const Header = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const { validatePermissions } = useSignIn();

  const route = useRouter();

  const signInHandler = async () => {
    await validatePermissions();
  };

  const logoutHandler = async () => {
    sessionStorage.removeItem(SESSION_ID);
    route.reload();
  };

  useEffect(() => {
    const session_id = sessionStorage.getItem(SESSION_ID);
    if (session_id) setIsSignIn(true);
  }, []);

  return (
    <HeaderPage
      dataTest="HeaderPage"
      isSignIn={isSignIn}
      signInHandler={signInHandler}
      logoutHandler={logoutHandler}
    />
  );
};

export default Header;
