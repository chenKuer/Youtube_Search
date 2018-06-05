import React, { Component } from 'react';

class SearchBar extends Component {
    //initiate the state
    constructor(props){
        super(props);

        this.state = {term:''};
    }

    render(){  // render function
        return (
        <div className="search-bar">
            <input 
                value={this.state.term}
                onChange={(event)=> this.onInputChange(event.target.value)} />
          
        </div>
        );
    }

    onInputChange(term){
        if(!term){
            console.log("empty term");
        };
        

        this.setState({term});
        this.props.onSearchTermChange(term);
        // console.log(event.target.value);

    }
}

export default SearchBar;