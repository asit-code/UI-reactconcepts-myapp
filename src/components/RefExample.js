import React, { Component } from "react";
import path from "../video1.mp4";

export default class RefExample extends Component {
  constructor(props) {
    super(props);

    this.counterRef = React.createRef();
    this.videoRef = React.createRef();
  }
  changeCount = () => {
    this.counterRef.current.value++;
  }
  playVideo = () => {
    this.videoRef.current.play();
  }
  pauseVideo = () => {
    this.videoRef.current.pause();
  }
  componentDidMount() {
    //to auto focus after render method 1st execution.
    this.counterRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" name="counter" ref={this.counterRef} />
        {/* <input type='text' name='counter' value={this.state.value}>Counter</input> */}
        <button onClick={this.changeCount}> Increment counter </button>
        <br/><br/>
        <video controls width="800px" ref={this.videoRef}>
          <source src={path} type="video/mp4" />
        </video>
        <button onClick={this.playVideo}> Play</button>
        <button onClick={this.pauseVideo}> Pause</button>
      </div>
    );
  }
}
