import React, { Component } from 'react'

export default class ActiveBackground extends Component {
    render() {
        return (
            <video
            // onMouseMove={e => this.handleMouseMove(e)}
            autoPlay
            muted
            loop
            id="DNA-vid"
            style={{
              width: "100%",
              margin: 0,
              pading: 0,
              overflowX: "hidden"
            }}
          >
            <source
              src="http://localhost:5555/static/DNA.mp4"
              type="video/mp4"
            />
          </video>
        )
    }
}
