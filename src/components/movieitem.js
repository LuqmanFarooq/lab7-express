import React from 'react';
import '../App.css';

class Movieitem extends React.Component {
    render() {
        return (
            <div>
            <h2>Hello from MovieItem</h2>
            <h4>{this.props.movie.Title}</h4>
            <p>{this.props.movie.Year}</p>
            <img src={this.props.movie.Poster}></img>
            </div>

        );
    }
}

export default Movieitem;
