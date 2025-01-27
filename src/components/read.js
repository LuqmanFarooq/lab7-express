import React from 'react';
import '../App.css';
import Movies from './movies';
import Axios from 'axios';

class Read extends React.Component {

    state = {
        movies: []
    };
    
    componentDidMount(){
        Axios.get('http://localhost:4000/api/movies')
        .then((response) => {this.setState({movies:response.data.movies})
    })
    .catch((error)=>{console.log(error);
    });
    }
    render() {
        return (
            <div>
            <h2>Hello from Movies component</h2>
            <Movies myMovies={this.state.movies}></Movies>
            </div>
        );
    }
}

export default Read;
