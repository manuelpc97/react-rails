import React, {useState} from 'react';
import ArticleTable from './ArticleTable';

const ArticleSection = (props) => {
    //  Parsing props
    const { articles } = props;

    //  Component state
    const [flag, setFlag] = useState(false);

    //  Rendering functions
    return (
        <>
            <h1>Articles</h1>
            <ArticleTable articles={articles}/>
            <button onClick={() => setFlag(!flag)}>Change state</button>
            <h2>{`State: ${flag}`}</h2>
        </>
    );
}

export default ArticleSection;