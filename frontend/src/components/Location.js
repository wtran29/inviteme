import React from 'react';

const Location = (props) => {
    console.log(props.loc);

    return (
        <div className="location-display"><i className="small location arrow icon" />You are here - {props.loc.lat}, {props.loc.lon}</div>
    )
};

export default Location;