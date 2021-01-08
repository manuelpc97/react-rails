import React from 'react';
import { StaticRouter, BrowserRouter } from 'react-router-dom';

const Router = (props) => {
    //  Parsing props
    const { location, children } = props;

    //  Rendering functions
    return (
        <BrowserRouter location={location}>
            {children}
        </BrowserRouter>
    )
}

export default Router;