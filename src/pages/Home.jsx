import React from 'react';
import { IconFacebook, IconGoogle } from '../components/icons/Icons';

import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="iconGoogle">
        <IconGoogle />
      </div>
      <div className="iconFacebook">
        <IconFacebook />
      </div>
    </div>
  );
};

export default Home;
