import React, { useState } from 'react';
import Button from '../components/buttonGroup/Button';
import ButtonGroup from '../components/buttonGroup/ButtonGroup';

import './buttonGroupPage.scss';

const __ButtonGroupPage = () => {
  const [rSelected, setRSelected] = useState(1);

  return (
    <div className="buttonGroupPage">
      <ButtonGroup>
        <Button
          color="success"
          active={rSelected === 1}
          onClick={() => setRSelected(1)}
        >
          BLUE
        </Button>
        <Button
          color="success"
          active={rSelected === 2}
          onClick={() => setRSelected(2)}
        >
          RED
        </Button>
        <Button
          color="danger"
          active={rSelected === 3}
          onClick={() => setRSelected(3)}
        >
          GREEN
        </Button>
      </ButtonGroup>

      {/* <div className="radio-toolbar">
        <input type="radio" id="radio1" name="radios" value="all" />
        <label for="radio1">All</label>

        <input type="radio" id="radio2" name="radios" value="false" />
        <label for="radio2">Open</label>

        <input type="radio" id="radio3" name="radios" value="true" />
        <label for="radio3">Archived</label>
      </div> */}
    </div>
  );
};

export default __ButtonGroupPage;
