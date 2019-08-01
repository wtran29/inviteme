import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Summer time! Be sure to cool off on these sunny days.",
        iconName: 'sun'
    },
    winter: {
        text: "Might be a little chilly, stay warm!",
        iconName: 'snowflake outline'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season]
    
    return (
        <div className={`season-display ${season}`}>
            
            <h4><i className={`large ${iconName} icon`} />{text}</h4>
            
        </div>
    )
};

export default SeasonDisplay;