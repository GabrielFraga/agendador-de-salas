import React from 'react';

import { Form } from 'react-bootstrap';

import SelectRoom from './select';

export default function RoomSelect({ onChange }) {
  return (
    <Form onChange={onChange}>
      <Form.Group>
        <Form.Control as="select">
          <SelectRoom />
        </Form.Control>
      </Form.Group>
    </Form>
  );
}
