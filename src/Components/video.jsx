import React, { Component } from 'react';
import ReactPlayer from 'react-player';

const Video = (props) => {
    return (  
        <div className="page-container">
            <form className="header" onSubmit={props.getVideo}>
                <input type="text" onChange={props.onChange} name="url" placeholder="enter video link"/>
                <button type="submit" disabled={props.urlList.length >= 12 ? true : false}>Add Video</button>
            </form>
            <div className="video-container">
                {props.urlList.map((url, ind) => {            
                    return <ReactPlayer 
                            className="video-display"                     
                            key={ind}
                            url={url}
                            getVideo={props.getVideo}
                            onChange={props.onChange}
                            width={props.getWidth}
                            height={props.getHeight}
                            playing={true}
                            controls={true}
                        />                  
                })}
            </div>
        </div> 
    );
}
 
export default Video;