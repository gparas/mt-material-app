import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function Megaphone(props) {
  const {
    secondaryfill,
    fill,
  } = props;

  return (
    <SvgIcon {...props}>
      <g fill={secondaryfill} transform="translate(2 2) scale(0.8)">
        <path d="M19.525,1.149a1,1,0,0,0-.972-.044L10.764,5H5A5,5,0,0,0,5,15h5.764L18.553,18.9A1,1,0,0,0,20,18V2A1,1,0,0,0,19.525,1.149Z" fill={fill} />
        <path d="M21,7v6a3,3,0,0,0,0-6Z" />
        <path d="M10.142,17H5.813l2.334,5.744a2,2,0,0,0,3.708-1.492Z" />
      </g>
    </SvgIcon>
  );
}

Megaphone.defaultProps = {
  fill: 'currentColor',
  secondaryfill: 'currentColor',
};

Megaphone.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
};

export default Megaphone;
