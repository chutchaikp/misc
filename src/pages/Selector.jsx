import { useState } from 'react';
import './selector.scss';
const Selector = () => {
  const [select, setSelect] = useState('open');

  return (
    <div className="selector">
      <h1> Selector </h1>

      <div className="radios">
        {/* <div>
          <input type="radio" id="radio1" name="radios" value="all" />
          <label style={{ backgroundColor: 'blue' }} for="radio1">
            All
          </label>
        </div> */}

        <div>
          <input
            type="radio"
            id="radio2"
            name="radios"
            checked={select === 'open'}
            value="open"
            onChange={() => setSelect('open')}
          />
          <label
            style={{ backgroundColor: 'red' }}
            className="green"
            for="radio2"
          >
            Open
          </label>
        </div>

        <div>
          <input
            type="radio"
            id="radio4"
            name="radios"
            checked={select === 'other'}
            value="other"
            onChange={() => setSelect('other')}
          />
          <label style={{ backgroundColor: 'green' }} for="radio4">
            Other
          </label>
        </div>

        <div>
          <input
            type="radio"
            id="radio3"
            name="radios"
            checked={select === 'archived'}
            value="archived"
            onChange={() => setSelect('archived')}
          />
          <label style={{ backgroundColor: 'yellow' }} for="radio3">
            Archived
          </label>
        </div>
      </div>

      <div>{select}</div>
    </div>
  );
};
export default Selector;
