import React from 'react';
import faker from 'faker';
import { List } from 'antd';
import ApprovalCard from './ApprovalCard';

const Comments = (props) => {
    const comment = props.data;
    
    return (
        <List
            dataSource={comment}
            renderItem={comment => (
                <div className="approval">
                    <ApprovalCard>
                        <div className="comment">
                            <a href="/" className="avatar">
                                <img alt="avatar" src={faker.image.avatar()} />
                            </a>
                            <div className="content">
                                <a href="/" className="author">{comment.author}</a>
                                <div className="metadata">
                                    <span className="date">Today at {comment.created_at}</span>
                                </div>
                                <div className="text">
                                    {comment.text}
                                    </div>
                                <div className="actions">
                                    <a className="reply">Reply</a>
                                </div>
                            </div>
                        </div>
                    </ApprovalCard>
                </div>
            )}
        />
    )
}

export default Comments;