import React from 'react';
import {
  IconFacebook,
  IconGithub,
  IconGoogle,
} from '../components/icons/Icons';

import './icon.scss';

const Icon = () => {
  return (
    <div className="icon">
      <div className="wrapper">
        <div className="iconGoogle">
          <IconGoogle />
        </div>
        <div className="iconFacebook">
          <IconFacebook />
        </div>
        <div className="iconGithub">
          <IconGithub />
        </div>
      </div>
    </div>
  );
};

export default Icon;
