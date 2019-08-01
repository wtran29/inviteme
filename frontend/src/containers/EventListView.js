import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import faker from 'faker';

import Events from '../components/Event';
import CustomForm from '../components/Form';
import Location from '../components/Location';
import LocationView from '../containers/LocationView';
import SeasonDisplay from '../components/SeasonDisplay';
import SearchBar from '../components/SearchBar';
import events from '../api/events';

import { getEvents } from '../store/actions/index';

/*const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}*/


class EventList extends React.Component {
    /* state = {
        events: [],
        filteredEvents: []
    }

    componentDidMount() {

        
        /*events.get('/events/')
            .then(res => {
                this.setState({
                    events: res.data,
                    filteredEvents: res.data
                });
                
            })
    }

    /*filterEvents = (term) => {
        let filteredEvents = this.state.events
        filteredEvents = filteredEvents.filter((event) => {
            console.log('filteredEvent', event);
            const adjustedEvents = event.name.toLowerCase() + event.address.toLowerCase() + event.event_type.toLowerCase() + event.creator.username.toLowerCase();
            const filterTerm = term.toLowerCase();
            return adjustedEvents.includes(filterTerm);
        })
        this.setState({
            filteredEvents
        })
        
    }*/
    renderList() {
        return this.props.events.map((event) => {
            return (
                <div className="event" key={event.id}>
                    <div className="event" style={{ borderBottom: '1px solid rgba(34,36,38,.15)', padding: '1em' }}>
                        <div className="profile" style={{ verticalAlign: 'top', display: 'inline-block', width: '4em', height: '4em', marginRight: 8 }}>
                            <img className="ui middle align avatar image" src={faker.image.avatar()} style={{ width: '3em', height: '3em' }} />
                        </div>
                        <div className="content" style={{ display: 'inline-block' }}>
                            <a href={`/${event.id}`} className="header single line">{event.name}</a>
                            <p className="address"> Located at: {event.address}</p>
                            <p className="date">Event is taking place on {event.date}.</p>
                        </div>
                        <div className="horizontal">
                            <div className="ui large star rating" data-rating="3" data-max-rating="5"></div>
                            <a href={`/${event.id}`}>
                                <i class="large comments outline icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            );
        });
    }
    render() {
        console.log('render event', this.props);
        
        /* return (
            <div className="ui container">
                <LocationView />
                <SearchBar onChange={this.filterEvents} />
                <p style={{ fontStyle: 'italic' }}>Found {this.state.filteredEvents.length} events</p>
                <Events data={this.state.filteredEvents} />
                <br />
                <div className="ui attached message" style={{ marginTop: '5em' }}>
                    <h2 className="single line">Create an event</h2>
                </div>
                <div className="ui attached segment" style={{ paddingTop: '2em' }}>
                    <CustomForm />
                </div>
            </div>
        ) */

        
        return (
            <div className="ui container">
                <LocationView />
                <SearchBar onChange={this.filterEvents} />

                <Events data={this.props.fetchEventsData}></Events>
                <br />
                <div className="ui attached message" style={{ marginTop: '5em' }}>
                    <h2 className="single line">Create an event</h2>
                </div>
                <div className="ui attached segment" style={{ paddingTop: '2em' }}>
                    <CustomForm />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps', state);
    return { events: state.data };
    // return state
}

export default connect(mapStateToProps, { getEvents })(EventList);