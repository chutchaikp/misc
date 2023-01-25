import React from 'react';

import './listGroup.scss';

const ListGroup = (props) => {
  return (
    <ul className="list-group" {...props}>
      {props.children}
    </ul>
  );
};

export default ListGroup;
