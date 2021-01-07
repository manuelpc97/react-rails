import React from 'react';
import ArticleListItem from './ArticleListItem';

const tableColumns = ['Title', 'Content', 'Viewers', 'Rating'];

const ArticleTable = (props) => {
    //  Parsing props
    const { articles } = props;

    //  Rendering head
    const renderTableHead = () => {
        const columns = tableColumns.map((column, index) => <th key={`head-${index}`}>{column}</th>);
        return [...columns, <th key={"head_1"}colSpan="3"></th>]
    }

    //  Rendering articles
    const renderArticles = () => {
        if (!articles) { return []; }
        return articles.map((article, index) => {
            return <ArticleListItem key={`article-${index}`} article={article} />
        });
    }

    //  Rendering functions
    return (
        <table>
            <thead>
                <tr>
                    {renderTableHead()}
                </tr>
            </thead>
            <tbody>
                {renderArticles()}
            </tbody>
        </table>
    );
}

export default ArticleTable;