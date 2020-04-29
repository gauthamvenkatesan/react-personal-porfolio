import React, { Component } from 'react';


class Search extends Component{

    state ={artistQuery : ''};

    updateArtistQuery = (event) =>{
        this.setState({artistQuery : event.target.value});
    }

    onKeyPress = event =>{
        if(event.key === 'Enter'){
            this.setState({artistQuery : event.target.value});
            this.searchArtist();
        }
    }

    searchArtist = () =>{
        this.props.searchArtist(this.state.artistQuery);
    }

    render(){
        return (
            <div>
                <input onChange={this.updateArtistQuery} onKeyPress={this.onKeyPress} placeholder='Search for any artist'></input>
                <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }
}

export default Search;