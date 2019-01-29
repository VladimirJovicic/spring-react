import React, { Component } from 'react';
import Article from './Article/Article'
import Title from '../../components/Title/Title';
import './Articles.css';
import './../fixedBacground.css';
import { connect } from 'react-redux';
import { getAllArticles } from '../../store/actions/articleActions'

class Articles extends Component {
    componentDidMount() {
        console.log('componentDidMount')
        this.props.getAllArticles(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        const currentUrl = this.props.match.url;
        const prevUrl = prevProps.match.url;
        if (prevUrl !== currentUrl) {
            this.props.getAllArticles(this.props.match.params.id)
        }
    }

    render() {
        const articles = this.props.articles.map(article => {
            return <Article key={article.id} article={article} changeRoute={'article/' + article.id} />
        })
        return (
            <React.Fragment>
                <Title title='ARTICLES' />
                <div className="Articles fixedImage">
                    {articles.length === 0
                        ? <h1>NO ARTICLES IN HERE :(</h1>
                        : articles}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        articles: state.article.articles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllArticles: (id) => dispatch(getAllArticles(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);