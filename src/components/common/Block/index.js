import { theme } from '../../../constants';
import { select } from '../../../helpers';

const Block = (props) => {
  return (
    <>
      <div {...props}>{props.children}</div>
      <style jsx>
        {`
          div {
            width: ${props.width};
            height: ${props.height};
            max-height: ${props.maxH};
            max-width: ${props.maxW};
            min-height: ${props.minH};
            min-width: ${props.minW};

            display: ${select.display(props)};
            justify-content: ${select.justify(props)};
            align-items: ${select.align(props)};
            flex-direction: ${select.direction(props)};
            grid-template-rows: ${select.rows(props)};
            grid-template-columns: ${select.columns(props)};

            overflow: ${select.overflow(props)};
            overflow-x: ${select.overflowX(props)};
            overflow-y: ${select.overflowY(props)};

            position: ${select.position(props)};
            top: ${select.top(props)};
            right: ${select.right(props)};
            bottom: ${select.bottom(props)};
            left: ${select.left(props)};
            z-index: ${select.zIndex(props)};

            background: ${select.background(props)};
            color: ${select.color(props)};

            padding: ${select.padding(props)};
            margin: ${select.margin(props)};

            border: ${select.border(props)};
            border-radius: ${select.radius(props)};

            cursor: ${select.pointer(props)};

            transition: ${props.transition};
          }
          div:hover {
            ${props.hover}
          }
          div:active {
            ${props.active}
          }

          @media (min-width: ${theme.screens.s2}) {
            div {
              ${props.s2}
            }
          }

          @media (min-width: ${theme.screens.s3}) {
            div {
              ${props.s3}
            }
          }
        `}
      </style>
    </>
  );
};

export default Block;
