import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Title from '../Title';
import { theme } from '../../../constants';

const RatePage = ({ rate, setRate }) => {
  return (
    <>
      <div className={'container'}>
        <Title>Rate</Title>
        <div className="stars">
          {values.map((value) => (
            <strong
              className="star"
              onClick={() => setRate(value * 2)}
              style={{
                color:
                  Math.floor(rate / 2) >= value
                    ? theme.colors.warning
                    : theme.colors.secondary,
              }}
            >
              {<FontAwesomeIcon icon={faStar} />}
            </strong>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin: ${theme.margins.m2};
          }
          .stars {
            text-align: center;
            margin: ${theme.margins.m1};
          }
          .star {
            cursor: pointer;
            font-size: ${theme.sizes.title};
          }
        `}
      </style>
    </>
  );
};

const values = [1, 2, 3, 4, 5];

export default RatePage;
