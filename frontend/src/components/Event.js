import React from 'react';
import { List, Avatar, Icon } from 'antd';
import faker from 'faker';

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

const Events = (props) => {
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
                        <IconText type="message" text="2" />,
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
                /*<div className="content">
                    <a href={`/${item.id}`} className="name">
                        {item.name}
                    </a>
                </div>*/
            )}
        />
    )
}


export default Events;