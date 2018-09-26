import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function User(props) {
  const {
    secondaryfill,
    fill,
  } = props;

  return (
    <SvgIcon {...props}>
      <g fill={secondaryfill} transform="translate(2 2) scale(0.8)">
        <path d="M12,13c3.309,0,6-2.691,6-6V6c0-3.309-2.691-6-6-6S6,2.691,6,6v1C6,10.309,8.691,13,12,13z" fill={fill} />
        <path d="M19.322,15.981c-4.704-1.303-9.939-1.303-14.644,0C2.513,16.581,1,18.564,1,20.805V24h22 v-3.195C23,18.564,21.487,16.581,19.322,15.981z" />
      </g>
    </SvgIcon>
  );
}

User.defaultProps = {
  fill: 'currentColor',
  secondaryfill: 'currentColor',
};

User.propTypes = {
  fill: PropTypes.string,
  secondaryfill: PropTypes.string,
};

export default User;
