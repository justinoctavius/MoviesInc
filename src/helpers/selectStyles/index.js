import { theme } from '../../constants';

const { colors, paddings, margins } = theme;

const select = {};

select.padding = ({ p1, p2 }) => {
  return (p1 && paddings.p1) || (p2 && paddings.p2);
};

select.margin = ({ m1, m2 }) => {
  return (m1 && margins.m1) || (m2 && margins.m2);
};

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

select.width = ({ width, maxW, minW }) => {
  return (width && width) || (maxW && maxW) || (minW && minW);
};

select.height = ({ height, maxH, minH }) => {
  return (height && height) || (maxH && maxH) || (minH && minH);
};

select.border = ({ border, bColor }) => {
  return border && `1px solid ${colors[bColor] || bColor || colors.secondary}`;
};

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

select.radius = ({ br1, br2 }) => {
  return (br1 && '1em') || (br2 && '2em');
};

select.overflow = ({ overflowHidden, scroll }) => {
  return (overflowHidden && 'hidden') || (scroll && 'scroll');
};
select.overflowX = ({ overflowXHidden, scrollX }) => {
  return (overflowXHidden && 'hidden') || (scrollX && 'scroll');
};
select.overflowY = ({ overflowYHidden, scrollY }) => {
  return (overflowYHidden && 'hidden') || (scrollY && 'scroll');
};

select.zIndex = ({ zIndex1, zIndex2 }) => {
  return (zIndex1 && '9') || (zIndex2 && '99');
};

select.pointer = ({ pointer }) => {
  return pointer && 'pointer';
};

export default select;
