import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Collaborators from '../pages/Collaborators';
import CreateCollaborators from '../pages/Collaborators/create';
import UpdateCollaborators from '../pages/Collaborators/update';

import Appointments from '../pages/Appointments';

import Rooms from '../pages/Rooms';
import CreateRooms from '../pages/Rooms/create';
import UpdateRooms from '../pages/Rooms/update';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Collaborators} />

      <Route path="/collaborators" exact component={Collaborators} />
      <Route path="/collaborators/add" component={CreateCollaborators} />
      <Route path="/collaborators/edit/:id" component={UpdateCollaborators} />

      <Route path="/appointments" exact component={Appointments} />

      <Route path="/Rooms" exact component={Rooms} />
      <Route path="/Rooms/add" component={CreateRooms} />
      <Route path="/Rooms/edit/:id" component={UpdateRooms} isPrivate />
    </Switch>
  );
}
