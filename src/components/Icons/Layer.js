import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function Layer(props) {
  const {
    secondaryfill,
    strokeWidth,
    fill,
  } = props;

  return (
    <SvgIcon {...props}>
      <g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeWidth={strokeWidth} transform="translate(0.5 0.5)">
        <polygon fill="none" points="2,7 12,1 22,7 12,13 " stroke={fill} />
        <polyline fill="none" points=" 22,12 12,18 2,12 " />
        <polyline fill="none" points=" 22,17 12,23 2,17 " />
      </g>
    </SvgIcon>
  );
}

Layer.defaultProps = {
  fill: 'currentColor',
  secondaryfill: 'currentColor',
  strokeWidth: 2,
};

Layer.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default Layer;
