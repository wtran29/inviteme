import React from 'react';
/*import { List, Avatar, Icon } from 'antd';*/
import faker from 'faker';

/*const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);*/

const Events = (props) => {
    console.log('All events', props.fetchEventsData);
    const events = props.fetchEventsData.map((event) => {
        return (
            <div key={event.id} className="ui container">
                <div className="event" style={{ borderBottom: '1px solid rgba(34,36,38,.15)', padding: '1em' }}>
                    <div className="profile" style={{ verticalAlign: 'top', display: 'inline-block', width: '4em', height: '4em', marginRight: 8 }}>
                        <img className="ui middle align avatar image" src={faker.image.avatar()} style={{ width: '3em', height: '3em'}} />
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
        )
    });
    return (
        <div className="">
            <div className="ui relaxed divided list">{events}</div>
            <div className="ui right floated pagination menu block">
                <a className="icon item">
                    <i className="left chevron icon"></i>
                </a>
                <a className="item">1</a>
                <a className="item">2</a>
                <a className="item">3</a>
                <a className="item">4</a>
                <a className="icon item">
                    <i className="right chevron icon"></i>
                </a>
            </div>
        </div>
    )
}
/*
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={props.data}
            renderItem={item => (
                <List.Item
                    key={item}
                    actions={[
                        <IconText type="star-o" text="156" />,
                        <IconText type="like-o" text="156" />,
                        <a href={`/${item.id}`}>
                            <IconText type="message" text="2" />
                        </a>,
                    ]}
                    extra={
                        <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    }
                >
                    <List.Item.Meta
                        avatar={<Avatar src={faker.image.avatar()} />}
                        title={<a href={`/${item.id}`}>{item.name}</a>}
                        event_type={item.event_type}
                        date={item.date}
                        address={item.address}
                        description={item.address}
                    />

                    <div className="content">
                        
                        <a href={`/${item.id}`} className="name">
                            {item.name}
                        </a>
                        
                        <p className="address"> Located at: {item.address}</p>
                        
                    </div>
                    <div className="metadata">
                        <span className="date">
                            Event is taking place on {item.date}.
                        </span>
                    </div>
                </List.Item>
                
            )}
        />
    )
}
*/

export default Events;