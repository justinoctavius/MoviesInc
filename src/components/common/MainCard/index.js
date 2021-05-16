import { useRouter } from 'next/router';
import MainCardPage from './page';

const MainCard = ({ movie }) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(`/${movie.id}`);
  };

  return (
    <MainCardPage
      movie={movie}
      onClick={onClickHandler}
      dataTest={'MainCardPage'}
    />
  );
};

export default MainCard;
