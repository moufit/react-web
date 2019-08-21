import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import config from '../../config';
import BadgeImage from './badge.png';
import css from './Badge.css';

const Badge = props => {
  const { className, format, ...rest } = props;
  const mobileClasses = classNames(css.logoMobile, className);

  if (format === 'desktop') {
    return <img className={className} src={BadgeImage} alt={config.siteTitle} {...rest} />;
  }
};

const { oneOf, string } = PropTypes;

Badge.defaultProps = {
  className: null,
  format: 'desktop',
};

Badge.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Badge;
