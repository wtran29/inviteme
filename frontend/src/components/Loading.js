import React from 'react';

const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui small text loader">{props.message}</div>
        </div>
    );
};

Loader.defaultProps = {
    message: 'Loading'
};

export default Loader;