import React from 'react';
import { IconFacebook, IconGoogle } from '../components/icons/Icons';

// import './icon.scss';

const Icon = () => {
  return (
    <div className="home">
      Home
      <div className="iconGoogle">
        <IconGoogle />
      </div>
      <div className="iconFacebook">
        <IconFacebook />
      </div>
    </div>
  );
};

export default Icon;
