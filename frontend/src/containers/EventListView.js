import React from 'react';
import axios from 'axios';
import faker from 'faker';

import Events from '../components/Event';
import CustomForm from '../components/Form';
import ApprovalCard from './ApprovalCard';


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
    state = {
        events: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/events/')
            .then(res => {
                this.setState({
                    events: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <Events data={this.state.events} />
                <br />
                <h2>Create an event</h2>
                <CustomForm />
            </div>
        )
    }
}

export default EventList;