import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function Bell(props) {
  const {
    secondaryfill,
    fill,
  } = props;

  return (
    <SvgIcon {...props}>
      <g fill={secondaryfill} transform="translate(2 2) scale(0.8)">
        <path d="M21.855,18.482A12.85,12.85,0,0,1,20,11.994V8.006a8,8,0,0,0-16,0v3.982a12.851,12.851,0,0,1-1.855,6.494A1,1,0,0,0,3,20H21a1,1,0,0,0,.855-1.518Z" fill={fill} />
        <path d="M13.007,23.825a3,3,0,0,0,1.819-1.819H9.174A3,3,0,0,0,13.007,23.825Z" />
      </g>
    </SvgIcon>
  );
}

Bell.defaultProps = {
  fill: 'currentColor',
  secondaryfill: 'currentColor',
};

Bell.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
};

export default Bell;
