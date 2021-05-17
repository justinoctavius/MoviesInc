import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Title from '../Title';
import { theme } from '../../../constants';
import Block from '../Block';

const RatePage = ({ rate, setRate }) => {
  return (
    <>
      <Block m2>
        <Title>Rate</Title>
        <Block m1 flex center className="stars">
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
        </Block>
      </Block>
      <style jsx>
        {`
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
