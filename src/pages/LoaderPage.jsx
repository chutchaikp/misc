import React from 'react';
import Loader from '../components/loader/Loader';

import './loaderPage.scss';

const LoaderPage = () => {
  return (
    <div className="loaderPage">
      <h1>Loader Page</h1>
      <Loader type={'feed'} />
    </div>
  );
};

export default LoaderPage;
