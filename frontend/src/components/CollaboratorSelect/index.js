import React from 'react';

import { Form } from 'react-bootstrap';

import SelectCollaborator from './select';

export default function CollaboratorSelect({ onChange }) {
  return (
    <Form onChange={onChange}>
      <Form.Group>
        <SelectCollaborator />
      </Form.Group>
    </Form>
  );
}
