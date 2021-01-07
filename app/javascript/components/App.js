import React, { useState, useEffect } from 'react';

const App = (props) => {
    //  Parsing props
    const { message } = props;

    //  Component state
    const [hasError, setHasError] = useState(false);

    //  Watching has error message
    useEffect(() => {
        console.log('Has error is changing');
    }, [hasError]);

    //  Changing component state
    const changeState = () => {
        setHasError(!hasError);
    }

    //  Getting message
    const getMessage = () => {
        if (hasError) { return "This is an error message"; }
        return `Message: ${message}`;
    }

    //  Rendering functions
    return (
        <>
            <h1>Houses</h1>
            <div>
                {getMessage()}
            </div>
            <button onClick={changeState}>Change state</button>
        </>
    );
}

export default App;