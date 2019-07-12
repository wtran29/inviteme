import React, { Component } from 'react';

import axios from 'axios';
import faker from 'faker';

export default class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
        this.loadEvents = this.loadEvents.bind(this);
    }

    componentWillMount() {
        this.loadEvents();
    }

    async loadEvents() {
        const promise = await axios.get('http://localhost:8000/api/events/');
        const status = promise.status;
        if (status === 200) {
            const data = promise.data.data;
            this.setState({ events: data });
        }
    }

    render() {
        return (
            <div>
                <h1>Events</h1>
                <div className='ui container avatar'>
                    <img alt='avatar' src={faker.image.nature()} />
                </div>
                {this.state.events.map((value, index) => {return <h4 key={index}>{value}</h4>})}
            </div>
        )
    }
}