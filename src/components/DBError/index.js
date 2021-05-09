import React from 'react';
import Amumu from '../../assets/images/amumu.gif';

const DBError = () => (
  <div className="loadingScreen" >
    <p>Well this is awkward....</p>
		<p>I'm having issues connecting to a database :(</p>
		<img src={Amumu} alt="Sad mummy" />
  </div>
);

export default DBError;