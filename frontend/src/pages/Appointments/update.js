import React from 'react';

import AppointmentForm from '../../components/AppointmentForm';

export default function UpdateCollaborators({ location }) {
  const { id, room_id, collaborator_id, date_start, date_end } = location.state;
  return (
    <AppointmentForm
      action="Editar"
      id={id}
      roomId={room_id}
      collaboratorId={collaborator_id}
      startDate={date_start}
      endDate={date_end}
    />
  );
}
