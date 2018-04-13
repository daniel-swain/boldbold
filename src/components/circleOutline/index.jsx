import React from 'react';

const CircleOutline = () => (
  <div
    className="circle-outline"
    style={{
      backgroundColor: 'transparent',
      border: 'solid 1px lightgrey',
      borderRadius: '100%',
      height: '0px',
      position: 'absolute',
      width: '0px',
      zIndex: '99'
    }}
  />
);

export default CircleOutline;