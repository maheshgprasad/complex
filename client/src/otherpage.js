import React from 'react';
import { link } from 'react-router-dom';

export default () => {
    return (
        <div>
            I'm the other page!
            <Link to="/">Go back home</Link>
        </div>
    );
};