import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { theme } from '../../../constants';
import { Block, Title } from '../../common';
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
    <>
      <Block height="100vh" width="100%" flex center middle>
        <Block
          height="20vh"
          width="30em"
          bg="secondary"
          br1
          p2
          flex
          column
          spaceBetween
          middle
        >
          <Title logo third>
            Login
          </Title>
          <p style={{ color: !state.success ? `#aa3333` : '#33aa33' }}>
            {state.msg}
          </p>
          <p>Redirecting in {counter} seconds...</p>
        </Block>
      </Block>
      <style jsx>
        {`
          p {
            font-size: ${theme.sizes.title};
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
};

export default SignInScreen;
