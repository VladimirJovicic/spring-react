import React from 'react';
import './Comment.css'
const comment = (props) => {
    return (
        <div className="Comment">
            <p className="CommentAuthor">AUTOR: PERA</p>
            <p className="CommentContetn">{props.comment.content}</p>

        </div>
    )
}

export default comment;