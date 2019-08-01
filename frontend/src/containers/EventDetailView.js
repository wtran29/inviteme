import React from 'react';
import axios from 'axios';
import map from 'lodash';

import { Card } from 'antd';

import CommentList from '../containers/CommentListView';

const Event = (props) => {
    console.log(props.data);
    const event = props.data
    
    return (

        <div className="content">
            <h2 className="name">{event.name}</h2>
            <span className="creator">created by {event.creator && event.creator.first_name} {event.creator && event.creator.last_name}</span>
            <p>Event is happening on {event.date}.</p>
        </div>
    )
}

class EventDetail extends React.Component {
    state = {
        event: {}
    }

    componentDidMount() {
        const eventID = this.props.match.params.eventID;
        console.log(eventID);
        axios.get(`http://localhost:8000/api/events/${eventID}`)
            .then(res => {
                this.setState({
                    event: res.data
                });
                console.log('in this.setState', res.data);
            })
    }

    render() {
        return (
            <div className="ui container">
                <Event data={this.state.event} />
                <br />
                <CommentList />
            </div>
            
        )
    }
}

export default EventDetail;


