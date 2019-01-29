import React from 'react';
import Comment from './Comment/Comment';
import './Comments.css';
import './../../fixedBacground.css';
const comments = (props) => {

    let comments = [];
    return (
        <div className="Comments">
            {
                props.comments.map(comment => {
                    comments.push(<Comment key={comment.id} comment={comment} />)
                    return null;
                })
            }
            {comments}

        </div>
    )
}

export default comments;