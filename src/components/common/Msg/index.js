import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { theme } from '../../../constants';
import Block from '../Block';

const Msg = ({ text, error }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {}, [show]);

  return (
    <Block
      fixed
      top="30%"
      left="25%"
      maxH="50%"
      maxW="50%"
      minW="50%"
      minH="10em"
      secondary
      p1
      border
      bg={error ? '#855d' : '#585d'}
      br1
      flex
      center
      middle
      zIndex1
      style={{ display: !show && 'none', fontSize: '1.5em' }}
    >
      <Block
        pointer
        onClick={() => setShow(false)}
        absolute
        top="0px"
        right="0px"
        style={{ fontSize: '1.5em' }}
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </Block>
      <p>{text}</p>
    </Block>
  );
};

export default Msg;
