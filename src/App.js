import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class App extends Component {
  state = { urlList: [] }

  getVideo = (event) => {
    event.preventDefault();
    const urlList = [...this.state.urlList];
    urlList.push(this.state.url);
    this.setState({urlList});
}

  handleChange = ({target: input}) => {
    let url = {...this.state.url}
    url = input.value;
    console.log(url)
    this.setState({ url });
  }

  render() { 
    return ( 
      <div>
        <form onSubmit={this.getVideo}>
          <input type="text" onChange={this.handleChange} name="url" placeholder="enter video link"/>
          <button type="submit">Add Video</button>
        </form>
        {this.state.urlList.map((url, ind) => {
          return <ReactPlayer url={url} key={ind}/>
        })}
      </div>
     );
  }
}
 
export default App;