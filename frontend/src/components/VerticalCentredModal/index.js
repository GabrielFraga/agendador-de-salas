import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function VerticalCentredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirmação de agendamento
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.title}</h4>
        {props.content}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Fechar
        </Button>
        <Button onClick={props.onSubmit}>Confirmar</Button>
      </Modal.Footer>
    </Modal>
  );
}
