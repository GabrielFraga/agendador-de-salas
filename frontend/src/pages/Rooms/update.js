import React from 'react';

import RoomForm from '../../components/RoomForm';

export default function UpdateRooms({ location }) {
  const {
    id,
    name,
    qntd_chairs,
    has_computer,
    has_projector,
    has_video_chat,
  } = location.state;

  return (
    <RoomForm
      action="update"
      roomId={id}
      name={name}
      qntd_chairs={qntd_chairs}
      has_computer={has_computer}
      has_projector={has_projector}
      has_video_chat={has_video_chat}
    />
  );
}
