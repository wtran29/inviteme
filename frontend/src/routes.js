import React from 'react';
import { Route } from 'react-router-dom';

import EventList from './containers/EventListView';
import EventDetail from './containers/EventDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={EventList} />
        <Route exact path='/:eventID' component={EventDetail} />
    </div>
);

export default BaseRouter;