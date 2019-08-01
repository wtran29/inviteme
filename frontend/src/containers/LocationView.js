import React from 'react';
import SeasonDisplay from '../components/SeasonDisplay';
import Location from '../components/Location';
import Loader from '../components/Loading';
import '../components/SeasonDisplay.css';
import Clock from '../components/Clock';
import ClockView from './ClockView';


class LocationView extends React.Component {
    state = {
        location: { lat: null, lon: null },
        errorMessage: '' 
    }

    componentDidMount() {
        console.log('Component was rendered to screen')
        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                this.setState({
                    location: {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    }
                })
            },
            err => {
                this.setState({
                    errorMessage: err.message
                })
            }
        );
    }

    renderContent() {
        console.log(this.state.location)
        if (this.state.errorMessage && !this.state.location.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.location.lat) {

            return (
                <div>
                    <Location loc={this.state.location} /> <ClockView />
                    <SeasonDisplay lat={this.state.location.lat} />
                    
                </div>
            )
        }

        return <Loader message="Accept the location request." />;
    }
    
    render() {
        return (
            <div className="season-border">
                {this.renderContent()}
            </div>
        )
    }
}

export default LocationView;