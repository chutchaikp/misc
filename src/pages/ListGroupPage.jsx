import React from 'react';
import { useState } from 'react';
import Collapse from '../components/collapse/Collapse';
import ListGroup from '../components/customControl/ListGroup';
import ListGroupItem from '../components/customControl/ListGroupItem';

const ListGroupPage = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          {' '}
          <Group />{' '}
        </ListGroupItem>
        <ListGroupItem>
          {' '}
          <Group />{' '}
        </ListGroupItem>
        <ListGroupItem>
          <Group />
        </ListGroupItem>
        <ListGroupItem>
          <Group />
        </ListGroupItem>
      </ListGroup>

      <ListGroup>
        <ListGroupItem>List group item 1</ListGroupItem>
        <ListGroupItem>List group item 2</ListGroupItem>
        <ListGroupItem>List group item 2</ListGroupItem>
        <ListGroupItem>List group item 2</ListGroupItem>
        <ListGroupItem>List group item 2</ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default ListGroupPage;

const Group = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ width: '555px' }}>
      <div className="header">
        Lorem ipsum dolor sit amet.
        <button onClick={() => setShow(!show)}>edit/hide</button>
      </div>
      <Collapse isOpen={show}>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
          quisquam suscipit animi nihil autem laboriosam nemo unde iusto
          corrupti. Sit, quidem reiciendis consequatur inventore at sapiente
          similique quasi enim assumenda quaerat illo commodi deleniti eum
          labore quibusdam officia ducimus ipsa illum. In quos iusto voluptatum
          perferendis animi sint quia quisquam et facere, molestiae illum sed
          reiciendis pariatur aliquid voluptate quidem odit assumenda beatae
          labore voluptatibus sit unde? Laboriosam, dolore sequi tempore
          suscipit deleniti doloremque accusamus provident quas quia, est
          dolorem minus corrupti, error officia voluptates laudantium aut vitae
          harum! Recusandae animi atque perferendis sapiente aliquid! Ut quo
          omnis porro officiis.
        </div>
      </Collapse>
    </div>
  );
};
