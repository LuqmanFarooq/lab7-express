import React from 'react';
import '../App.css';

class Movieitem extends React.Component {
    render() {
        return (
            <div>
            <h4>{this.props.movie.Title}</h4>
            <p>{this.props.movie.Year}</p>
            <img alt='movie poster' src={this.props.movie.Poster}></img>
            </div>

        );
    }
}

export default Movieitem;
