import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { theme } from '../../../constants';
import { Block, Msg, Title } from '../../common';
import { useSignIn } from '../../hooks';

const SignInScreen = () => {
  const { state, signIn } = useSignIn();
  const [counter, setCounter] = useState(5);

  const route = useRouter();

  const redirect = () => {
    const interval = setInterval(() => {
      if (counter <= 0) {
        clearInterval(interval);
        route.push('/');
      } else {
        setCounter(counter - 1);
      }
    }, 1000);
  };

  useEffect(() => {
    signIn();
  }, []);

  useEffect(() => {
    redirect();
  }, [counter]);

  return (
    <Block height="100vh" width="100%" flex center middle secondary title>
      <Msg text={state.msg || 'Success'} error={!state.success} />
      <p>Redirecting in {counter} seconds...</p>
    </Block>
  );
};

export default SignInScreen;
