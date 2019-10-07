import React from 'react';
import '../App.css';

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Title: ''};
        this.state = {Year: ''};
        this.state = {Url: ''};
    
        this.handleChangeMovieTitile = this.handleChangeMovieTitile.bind(this);
        this.handleChangeMovieYear = this.handleChangeMovieYear.bind(this);
        this.handleChangeMoviePoster = this.handleChangeMoviePoster.bind(this);
        this.handleSubmitTitle = this.handleSubmitTitle.bind(this);
        this.handleSubmitYear = this.handleSubmitYear.bind(this);
        this.handleSubmitPoster = this.handleSubmitPoster.bind(this);
      }
    handleChangeMovieTitile(event) {
        this.setState({Title: event.target.value});
      }

    handleChangeMovieYear(event) {
        this.setState({Year: event.target.value});
      }
      
    handleChangeMoviePoster(event) {
        this.setState({Url: event.target.value});
      }
    
      handleSubmitTitle(event) {
        alert('A Title was submitted: ' + this.state.Title);
        console.log(this.state.Title);
        event.preventDefault();
      }
      handleSubmitYear(event) {
        alert('A Year was submitted: ' + this.state.Year);
        console.log(this.state.Year);
        event.preventDefault();
      }
      handleSubmitPoster(event) {
        alert('A Url was submitted: ' + this.state.Url);
        console.log(this.state.Url);
        event.preventDefault();
      }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmitTitle}>
                <label>
                    Movie Title:
          <input type="text" value={this.state.Title}
                        onChange={this.handleChangeMovieTitile} />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <form onSubmit={this.handleSubmitYear}>
                <label>
                    Release Year:
          <input type="text" value={this.state.Year}
                        onChange={this.handleChangeMovieYear} />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <form onSubmit={this.handleSubmitPoster}>
                <label>
                    Poster Url:
          <input type="text" value={this.state.U}
                        onChange={this.handleChangeMoviePoster} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export default Create;
