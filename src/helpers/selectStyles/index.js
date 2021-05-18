import { theme } from '../../constants';

const { colors, paddings, margins, sizes } = theme;

const select = {};

//paddings
select.padding = ({ p1, p2 }) => {
  return (p1 && paddings.p1) || (p2 && paddings.p2);
};
select.paddingTop = ({ pt1, pt2 }) => {
  return (pt1 && paddings.p1) || (pt2 && paddings.p2);
};
select.paddingBottom = ({ pb1, pb2 }) => {
  return (pb1 && paddings.p1) || (pb2 && paddings.p2);
};
select.paddingLeft = ({ pl1, pl2 }) => {
  return (pl1 && paddings.p1) || (pl2 && paddings.p2);
};
select.paddingRight = ({ pr1, pr2 }) => {
  return (pr1 && paddings.p1) || (pr2 && paddings.p2);
};

//margins
select.margin = ({ m1, m2 }) => {
  return (m1 && margins.m1) || (m2 && margins.m2);
};
select.marginTop = ({ mt1, mt2 }) => {
  return (mt1 && margins.m1) || (mt2 && margins.m2);
};
select.marginBottom = ({ mb1, mb2 }) => {
  return (mb1 && margins.m1) || (mb2 && margins.m2);
};
select.marginLeft = ({ ml1, ml2 }) => {
  return (ml1 && margins.m1) || (ml2 && margins.m2);
};
select.marginRight = ({ mr1, mr2 }) => {
  return (mr1 && margins.m1) || (mr2 && margins.m2);
};

//colors
select.color = ({ third, primary, secondary, warning, color }) => {
  return (
    (third && colors.third) ||
    (primary && colors.primary) ||
    (secondary && colors.secondary) ||
    (warning && colors.warning) ||
    color
  );
};
select.background = ({ bg }) => {
  return (bg && colors[bg]) || bg;
};

//border
select.border = ({ border, bColor }) => {
  return border && `1px solid ${colors[bColor] || bColor || colors.secondary}`;
};
select.borderBottom = ({ borderBottom, bColorBottom }) => {
  return (
    borderBottom &&
    `1px solid ${colors[bColorBottom] || bColorBottom || colors.secondary}`
  );
};
select.borderTop = ({ borderTop, bColorTop }) => {
  return (
    borderTop &&
    `1px solid ${colors[bColorTop] || bColorTop || colors.secondary}`
  );
};
select.radius = ({ br1, br2 }) => {
  return (br1 && '1em') || (br2 && '2em');
};

//layout
select.display = ({ flex, block, grid, none }) => {
  return (
    (flex && 'flex') ||
    (block && 'block') ||
    (grid && 'grid') ||
    (none && 'none')
  );
};
select.direction = ({ row, column }) => {
  return (row && 'row') || (column && 'column');
};
select.rows = ({ rows }) => {
  return rows && rows;
};
select.columns = ({ columns }) => {
  return columns && columns;
};
select.position = ({ absolute, relative, sticky, fixed }) => {
  return (
    (absolute && 'absolute') ||
    (relative && 'relative') ||
    (sticky && 'sticky') ||
    (fixed && 'fixed')
  );
};
select.zIndex = ({ zIndex1, zIndex2 }) => {
  return (zIndex1 && '9') || (zIndex2 && '99');
};
select.top = ({ top }) => {
  return top && top;
};
select.right = ({ right }) => {
  return right && right;
};
select.left = ({ left }) => {
  return left && left;
};
select.bottom = ({ bottom }) => {
  return bottom && bottom;
};
select.justify = ({
  center,
  justifyRight,
  justifyEnd,
  spaceBetween,
  spaceAround,
  spaceEvenly,
}) => {
  return (
    (center && 'center') ||
    (justifyEnd && 'flex-end') ||
    (justifyRight && 'flex-right') ||
    (spaceBetween && 'space-between') ||
    (spaceAround && 'space-around') ||
    (spaceEvenly && 'space-evenly')
  );
};
select.align = ({ middle, alignEnd, alignRight }) => {
  return (
    (middle && 'center') ||
    (alignEnd && 'flex-end') ||
    (alignRight && 'alignRight')
  );
};

//overflow
select.overflow = ({ overflowHidden, scroll }) => {
  return (overflowHidden && 'hidden') || (scroll && 'scroll');
};
select.overflowX = ({ overflowXHidden, scrollX }) => {
  return (overflowXHidden && 'hidden') || (scrollX && 'scroll');
};
select.overflowY = ({ overflowYHidden, scrollY }) => {
  return (overflowYHidden && 'hidden') || (scrollY && 'scroll');
};

select.pointer = ({ pointer }) => {
  return pointer && 'pointer';
};

//text
select.fontSize = ({ small, logo, title }) => {
  return (
    (small && sizes.small) || (title && sizes.title) || (logo && sizes.logo)
  );
};
select.textAlign = ({ txtCenter, txtRight }) => {
  return (txtCenter && 'center') || (txtRight && 'right');
};

export default select;
