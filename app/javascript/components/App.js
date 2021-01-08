import React from 'react';
import { BrowserRouter, Switch, Route, StaticRouter } from 'react-router-dom';
import ArticleSection from './Articles/ArticleSection';

const App = (props) => {
    //  Rendering functions
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/articles" render={() => <ArticleSection params={props}/>} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;