import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { theme } from '../../../constants';
import { Title } from '../../common';
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
      <div className="container">
        <div className="card">
          <Title logo third>
            Login
          </Title>
          <p style={{ color: !state.success ? `#aa3333` : '#33aa33' }}>
            {state.msg}
          </p>
          <p>Redirecting in {counter} seconds...</p>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .card {
            height: 20vh;
            width: 30em;
            background-color: ${theme.colors.secondary};
            border-radius: 1em;
            padding: ${theme.paddings.p2};
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }
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
