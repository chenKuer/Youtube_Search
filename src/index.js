import _ from 'lodash';
import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// refer to the file name
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//Youtube API key
const API_KEY = 'AIzaSyATTqFUVkCTyLT8kO7BItYOgdjkBal5Kwg';


class App extends Component{
    constructor(props){
        super(props);

        this.state ={
            videos:[],
            selectedVideo:null

        };
        this.videoSearch("movie");
       
    }

    videoSearch(term){
        YTSearch({key:API_KEY, term:term },(videos)=>{
            console.log(videos);
            this.setState({
                videos:videos,
                selectedVideo:videos[0] 
            });   
            //this.setState({videos:videos});
        });
    }

    render(){
        const videoSerch = _.debounce((term) => {this.videoSearch(term),300});
        return (
            <div>
                <SearchBar onSearchTermChange = {videoSerch} />
                <VideoDetail video ={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect ={(selectedVideo)=>{
                        this.setState({selectedVideo})
                    }}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

// create a new component, This component create some HTML 
// const App = () => {
//     return (
//     <div>
//         <SearchBar />
//     </div>
//     );
// };

//Take this component's generated HTML and  put it on the Page
// App is the component, 
ReactDOM.render(<App />, document.querySelector('.container'));
