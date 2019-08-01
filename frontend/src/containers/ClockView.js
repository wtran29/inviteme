import React from 'react';
import Clock from '../components/Clock';

class ClockView extends React.Component {
    state = {
        time: null
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    render() {
        return (
            <Clock data={this.state.time} />
        )
    }
}

export default ClockView;