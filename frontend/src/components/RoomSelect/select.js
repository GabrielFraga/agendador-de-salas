import React, { useEffect, useState } from 'react';

import api from '../../services/api';

export default function SelectRoom({ id, name, value, onChange }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/room');
      setRooms(data);
    })();
  }, []);

  return (
    <select
      className="form-control"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    >
      {rooms.map(room => (
        <option key={room.id} value={room.id} name={room.name}>
          {room.name}
        </option>
      ))}
    </select>
  );
}
