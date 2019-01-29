import React, { Component } from 'react';
import Article from '../Article/Article';
import Comments from '../Comments/Comments';
import '../../fixedBacground.css'
import Title from '../../../components/Title/Title';
import { getFullArticle } from '../../../store/actions/articleActions';
import { getAllComments } from '../../../store/actions/commentActions'
import { connect } from 'react-redux'
class FullArticle extends Component {

    componentDidMount() {
        this.props.getArticle(this.props.match.params.id);
        this.props.getComments(this.props.match.params.id);
    }

    render() {
        return (
            <div className="fixedImage">

                <Title title={this.props.fullArticle.name} />
                <Article article={this.props.fullArticle} changeRoute={this.props.location} />
                <Comments comments={this.props.comments} />
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        fullArticle: state.article.fullArticle,
        comments: state.comments.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getArticle: (id) => dispatch(getFullArticle(id)),
        getComments: (id) => dispatch(getAllComments(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FullArticle);