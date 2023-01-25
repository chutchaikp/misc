import React from 'react';

import { Button } from '../components/customControl/CustomControl';

import './customControlPage.scss';

const CustomControlPage = () => {
  return (
    <div className="custom-control-page">
      <Button
        className="button-blue"
        onClick={() => {
          console.log('hello' + new Date().toISOString());
        }}
      >
        <div>
          <span>button 1</span>
        </div>
      </Button>

      <Button
        className="button-purple"
        onClick={() => {
          console.log('hello' + new Date().toISOString());
        }}
      >
        <div>
          <span>button 2</span>
        </div>
      </Button>
      <Button
        className="button-red"
        onClick={() => {
          console.log('hello' + new Date().toISOString());
        }}
      >
        <div>
          <span>button 2</span>
        </div>
      </Button>
    </div>
  );
};

export default CustomControlPage;
