import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class GetVideo extends Component {
    state = {  }

    getVideo = async(event) => {
        event.preventDefault();
        console.log(this.state.data);
        return <h1>HI</h1>
    }

    handleChange = ({target: input}) => {
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data });
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.getVideo}>
                    <input type="text" onChange={this.handleChange} name="url" placeholder="enter video link"/>
                    <button type="submit">Add Video</button>
                </form>
            </div>
         );
    }
}
 
export default GetVideo;