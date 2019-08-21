import React from 'react';
import PropTypes from 'prop-types';

const IconLogo = props => {
  const { className, ...rest } = props;

  return (
    <svg width="21" height="27.315" version="1.1" viewBox="0 0 21.000002 27.314583" xmlns="http://www.w3.org/2000/svg">
     <defs>
      <linearGradient id="linearGradient4380" x2="1" gradientTransform="matrix(138.65 -80.048 -80.048 -138.65 24.156 364.3)" gradientUnits="userSpaceOnUse">
       <stop stop-color="#ffcd00" offset="0"/>
       <stop stop-color="#ffcd00" offset=".061729"/>
       <stop stop-color="#ffb500" offset=".31851"/>
       <stop stop-color="#ffb500" offset=".35475"/>
       <stop stop-color="#ff8200" offset="1"/>
      </linearGradient>
      <linearGradient id="linearGradient4406" x2="1" gradientTransform="matrix(66.831 -38.585 -38.585 -66.831 141.49 436.3)" gradientUnits="userSpaceOnUse">
       <stop stop-color="#ffcd00" offset="0"/>
       <stop stop-color="#ffcd00" offset=".061729"/>
       <stop stop-color="#ffb500" offset=".31851"/>
       <stop stop-color="#ffb500" offset=".35475"/>
       <stop stop-color="#ff8200" offset="1"/>
      </linearGradient>
      <linearGradient id="linearGradient4432" x2="1" gradientTransform="matrix(204.23 -117.91 -117.91 -204.23 109.36 232.22)" gradientUnits="userSpaceOnUse">
       <stop stop-color="#ffcd00" offset="0"/>
       <stop stop-color="#ffcd00" offset=".061729"/>
       <stop stop-color="#ffb500" offset=".31851"/>
       <stop stop-color="#ffb500" offset=".35475"/>
       <stop stop-color="#ff8200" offset="1"/>
      </linearGradient>
     </defs>
     <g transform="matrix(1.3333 0 0 -1.3333 0 27.315)">
      <g transform="scale(.044966)">
       <path d="m24.446 342.13c-11.254 0-24.446-13.196-24.446-24.471v-16.402c0-0.215 0.173-0.41 0.41-0.41h152.79c2.802 21.069 19.289 37.813 40.241 40.979l2.807 0.343z" fill="url(#linearGradient4380)"/>
      </g>
      <g transform="scale(.044966)">
       <path d="m174.91 455.59c-21.307 0-38.579-17.272-38.579-38.579 0-21.306 17.272-38.579 38.579-38.579 21.305 0 38.578 17.273 38.578 38.579 0 21.307-17.273 38.579-38.578 38.579z" fill="url(#linearGradient4406)"/>
      </g>
      <g transform="scale(.044966)">
       <path d="m200.61 342.37c-26.45 0-47.89-21.442-47.89-47.89v-234.89c0-9.971-8.066-18.372-18.038-18.419 0 0-1.876 0.02-4.286 0.04-8.371 0.068-16.641-2.732-22.822-8.376-4.137-3.777-7.439-8.803-7.983-15.165l0.066-13.247c0-3.9-0.641-4.408 1.435-4.424h0.232c0.651 4e-3 1.534 0.04 2.728 0.04h71.044c12.774 0.301 21.972 11.758 22.044 24.534l0.019 142.93c0 4.088 3.315 7.402 7.402 7.402h143.65c0.343 0 0.62 0.278 0.62 0.621v17.065c0 12.32-9.987 22.307-22.306 22.307h-121.97c-4.087 0-7.402 3.315-7.402 7.402v63.463c0 8.33 6.753 15.082 15.083 15.082h137.22c0.443 0 0.801 0.359 0.801 0.802v12.914c0 15.355-12.446 27.802-27.801 27.802z" fill="url(#linearGradient4432)"/>
      </g>
     </g>
    </svg>

  );
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;
