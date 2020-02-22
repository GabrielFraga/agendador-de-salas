import React from 'react';

import CollaboratorForm from '../../components/CollaboratorForm';

export default function UpdateCollaborators({ location }) {
  const { id, name, email, phone } = location.state;
  return (
    <CollaboratorForm
      action="Editar"
      userId={id}
      userName={name}
      userEmail={email}
      userPhone={phone}
    />
  );
}
