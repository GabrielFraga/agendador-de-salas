import React from 'react';

// import { Container } from './styles';
import CollaboratorForm from '../../components/CollaboratorForm';

export default function UpdateCollaborators({ location }) {
  const { name, email, phone } = location.state;
  return (
    <CollaboratorForm
      action="Editar"
      userName={name}
      userEmail={email}
      userPhone={phone}
    />
  );
}
