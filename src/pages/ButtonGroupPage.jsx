// TODO: https://codepen.io/avstorm/pen/eYNLwVd

import React from 'react';

import './buttonGroupPage.scss';

const ButtonGroupPage = () => {
  return (
    <div className="button-group-page">
      <label for="f-option" class="l-radio">
        <input type="radio" id="f-option" name="selector" tabindex="1" />
        <span>First</span>
      </label>
      <label for="s-option" class="l-radio">
        <input type="radio" id="s-option" name="selector" tabindex="2" />
        <span>Second</span>
      </label>
      <label for="t-option" class="l-radio">
        <input type="radio" id="t-option" name="selector" tabindex="3" />
        <span>Third</span>
      </label>
    </div>
  );
};

export default ButtonGroupPage;
