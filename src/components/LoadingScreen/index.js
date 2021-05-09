import React from 'react';

const LoadingScreen = ({ inline }) => (
  <div className={inline ? "loadingScreenInLine" : `loadingScreen`} >
    <button></button>
    <p>Loading....</p>
  </div>
);

export default LoadingScreen