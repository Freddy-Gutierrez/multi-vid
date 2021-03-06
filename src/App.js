import React, { Component } from 'react';
import ReactPlayer from 'react-player/lazy'
import "./CSS/videoLayout.css";

const youtubeHelp = 'If entering direct link from youtube doesn\'t work click the share button below the video, copy that link and enter it into the search bar.';
class App extends Component {
  state = { urlList: []}

  getWidth = () => {
    const totalVids = this.state.urlList.length;
    console.log(totalVids);
    switch(totalVids){
      case 1:
        return "100%";
      case 2:        
        return "49%";
      case 3:
        return "33%";
      case 4:
        return "24%";        
      default:
        return "24%";
    }
  }

  getHeight = () =>  {
    const totalVids = this.state.urlList.length;
    console.log(totalVids);
    switch(totalVids){
      case 1:
        return "99%";   
      case 2:        
        return "65%";
      case 3:
        return "50%";      
      case 4:
        return "50%";
      case 5:
        return "49.5%";
      case 6:
        return "49.5%";
      case 7:
        return "49.5%";
      case 8:
        return "49.5%";
      case 9:
        return "31.5%";
      case 10:       
        return "31.5%";
      default:
        return "31.5%"; 
    }
  }

  getVideo = (event) => {
    event.preventDefault();
    const urlList = [...this.state.urlList];
    urlList.push(this.state.url);
    this.setState({urlList});
}

  handleChange = ({target: input}) => {
    let url = {...this.state.url}
    url = input.value;    
    this.setState({ url });
  }

  render() {     
    return ( 
      <div>      
        <div className="page-container">
          <form className="header" onSubmit={this.getVideo}>
            <input type="text" onChange={this.handleChange} name="url" placeholder="enter video link"/>
            <button type="submit" disabled={this.state.urlList.length >= 12 ? true : false}>Add Video</button>
            <button className="button-link" type="button" onClick={() => alert(youtubeHelp)}>Playing a youtube video</button>
          </form>
          <div className="video-container">
            {this.state.urlList.map((url, ind) => {            
              return <ReactPlayer 
                      className="video-display"
                      width={this.getWidth()}
                      height={this.getHeight()}
                      url={url}
                      playing={true}
                      controls={true}
                      key={ind}
                    />                  
            })}
          </div>
        </div>   
      </div>
     );
  }
}
 
export default App;