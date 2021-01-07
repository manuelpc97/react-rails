import React from 'react';

const ArticleListItem = (props) => {
    //  Parsing props
    const { article } = props;
    const { title, content, viewers, rating } = article;
    
    //  Rendering functions
    return (
        <tr>
            <td>{title}</td>
            <td>{content}</td>
            <td>{viewers}</td>
            <td>{rating}</td>
        </tr>
    );
}

export default ArticleListItem;