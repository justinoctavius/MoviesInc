import Card from '../../components/common/Card';
import MainCard from '../../components/common/MainCard';

const renderCard = (movie, main, onClick, empty = false) => {
  return main ? (
    <MainCard
      movie={movie}
      key={movie.id}
      onClick={onClick}
      dataTest="MainCard"
    />
  ) : (
    <Card
      movie={movie}
      key={movie.id}
      empty={empty}
      onClick={onClick}
      dataTest="Card"
    />
  );
};

export default renderCard;
