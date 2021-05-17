import { envs } from '../../../../config';
import Votes from '../Votes';

const Image = ({ vote, src }) => {
  return (
    <>
      <div className="image">
        {vote && <Votes vote={vote} />}
        <img src={`${envs.IMAGE_API}/${src}`} />
      </div>
      <style jsx>
        {`
          .image {
            height: 100%;
            text-align: center;
            background: #000;
            overflow: hidden;
            position: relative;
          }
          .image img {
            height: 100%;
          }
        `}
      </style>
    </>
  );
};

export default Image;
