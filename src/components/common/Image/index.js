import { envs } from '../../../../config';
import Block from '../Block';
import Votes from '../Votes';

const Image = ({ vote, src }) => {
  return (
    <Block
      height="100%"
      bg="#000"
      overflowHidden
      relative
      style={{ textAlign: 'center' }}
    >
      {vote && <Votes vote={vote} />}
      <img src={`${envs.IMAGE_API}/${src}`} style={{ height: '100%' }} />
    </Block>
  );
};

export default Image;
