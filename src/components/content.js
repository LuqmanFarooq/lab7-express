import React from 'react';
import '../App.css';

class Content extends React.Component {
    render() {
        return (
            <div>
            <h2>Hello World!</h2>
            <h2> It is {new Date().toLocaleTimeString()}.</h2>
            </div>

        );
    }
}

export default Content;
