import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Router from './../Router';
import ArticleTable from './ArticleTable';

const ArticleSection = (props) => {
    //  Parsing props
    const { params } = props;
    const { articles, location } = params;

    //  Getting history to get path
    const history = useHistory();

    //  Redirecting to form
    const redirectToForm = () => {
        window.location = "/articles/new";
        //history.push('/articles/new');
    }

    //  Rendering functions
    return (
        <>
            <h1>Articles</h1>
            <ArticleTable articles={articles} />
            <Link to='/articles/new'>
                Create articles
            </Link>
            <br />
            <br />
            <button onClick={redirectToForm}>
                Create Articles
            </button>
        </>
    );
}

export default ArticleSection;