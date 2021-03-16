// Libraries
import React from 'react';
import Lost1 from '../../assets/images/lost-01.gif';
import Lost2 from '../../assets/images/lost-02.gif';
import Lost3 from '../../assets/images/lost-03.gif';
import Lost4 from '../../assets/images/lost-04.gif';
let lostGif = [Lost1, Lost2, Lost3, Lost4];
let random = Math.floor(Math.random() * 4);
// Component
const NoMatch = () => (
  <div className="loadingScreen" >
		<p>404</p>
		<p>Looks like this page doesn't exist...</p>
		<img src={lostGif[random]} alt="Sad mummy" />
		<a href='/'>Go back home</a>
  </div>
);

export default NoMatch