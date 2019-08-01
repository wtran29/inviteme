import React from 'react';
import axios from 'axios';
import faker from 'faker';

import Comments from '../components/Comment';
import ApprovalCard from '../components/ApprovalCard';


class CommentList extends React.Component {
    state = {
        comments: [
            { author: "Matt", text: "How artistic!", created_at: "5:42PM" },
            { author: "Sam", text: "I'll be there!", created_at: "10:40PM" },
            { author: "Karen", text: "See you guys there!", created_at: "3:50PM" },
        ]
    }


    /*
    
    componentDidMount() {
        axios.get('http://localhost:8000/api/comments/')
            .then(res => {
                this.setState({
                    comments: res.data
                });
                console.log(res.data);
            })
    }
     */

    render() {
        return (
            <div className="ui container comments">
                <h3 className="ui dividing header">Comments</h3>
                <Comments data={this.state.comments} />
                <form className="ui reply form">
                    <div className="field">
                        <textarea></textarea>
                    </div>
                    <div className="ui blue labeled submit icon button">
                        <i className="icon edit"></i> Add Reply
                    </div>
                </form>
            </div>
        );
    }
}

export default CommentList;