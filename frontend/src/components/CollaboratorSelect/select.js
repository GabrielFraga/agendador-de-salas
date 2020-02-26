import React, { useEffect, useState } from 'react';

import api from '../../services/api';

export default function SelectRoom({ id, name, value, onChange }) {
  const [collaborators, setCollabotators] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/collaborator');
      setCollabotators(data);
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
      <option value="" selected disabled hidden>
        Escolha um usuário
      </option>
      {collaborators &&
        collaborators.map(collaborator => (
          <option
            key={collaborator.id}
            value={collaborator.id}
            name={collaborator.name}
          >
            {collaborator.name}
          </option>
        ))}
    </select>
  );
}
