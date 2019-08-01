import React from 'react';
import { Route } from 'react-router-dom';

import EventList from './containers/EventListView';
import EventDetail from './containers/EventDetailView';
import CommentList from './containers/CommentListView';
import LocationView from './containers/LocationView';


const BaseRouter = () => (
    <div>
        <Route exact path='/' component={EventList} />
        <Route exact path='/:eventID' component={EventDetail} />
        <Route exact path='/:eventID/comments/approve/' component={CommentList} />
    </div>
);

export default BaseRouter;