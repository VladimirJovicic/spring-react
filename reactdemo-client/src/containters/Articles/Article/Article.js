import React from 'react';
import './Article.css'
import { Link } from 'react-router-dom'

const article = (props) => {
    return (
        <div className="Article">

            <Link to={props.changeRoute} style={{
                textDecoration: 'none',
                color: 'black'
            }}>
                <p className="ArticleTitle">{props.article.name}</p>
                <p className="ArticleBody">{props.article.description}</p>
            </Link>
        </div >


    )
}

export default article;