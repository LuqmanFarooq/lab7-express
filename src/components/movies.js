import React from 'react';
import '../App.css';
import Movieitem from './movieitem';

class Movies extends React.Component {
    render() {
        return this.props.myMovies.map((movie)=>{
            //console.log({movie});
            return <Movieitem movie={movie}></Movieitem>
        });
    }
}

export default Movies;
