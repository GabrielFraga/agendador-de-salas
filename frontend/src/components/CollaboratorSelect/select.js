import React, { useEffect, useState } from 'react';

import api from '../../services/api';

export default function SelectRoom({ id, name, value, onChange }) {
  const [collabotators, setCollabotators] = useState([]);

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
      {collabotators.map(collabotator => (
        <option
          key={collabotator.id}
          value={collabotator.id}
          name={collabotator.name}
        >
          {collabotator.name}
        </option>
      ))}
    </select>
  );
}
