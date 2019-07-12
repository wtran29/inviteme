import React from 'react';
import axios from 'axios';
import map from 'lodash';

import { Card } from 'antd';

const Event = (props) => {
    console.log(props.data);
    const event = props.data
    const getCreator = map(event.creator).value()
    console.log(getCreator)
    function test(getCreator) {
        if (getCreator != null || getCreator !== undefined) {
            return 'True';
        }
        else {
            return 'False';
        }
    }
    console.log(test(getCreator))
    return (

        <div className="content">
            <p className="name">
                <h1>{event.name}</h1>
            </p>
         
            <p>created by {event.username}</p>
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
            
            <Event data={this.state.event} />
            
        )
    }
}

export default EventDetail;


