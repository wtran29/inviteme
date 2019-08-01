import React from 'react';

const Clock = (props) => {
    const time = props.data;
    return <div className="time"><i className="clock outline icon" />{time}</div>
}

export default Clock;