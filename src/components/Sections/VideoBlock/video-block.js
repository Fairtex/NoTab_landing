import React from "react"
import telFrame from "../../../assets/images/noTab-video-frame.png"
import VideoBg from "../../../assets/images/noTab-video-background.svg"

const VideoBlock = ({ content }) => {
  return (
    <section className="video-block">
      <VideoBg className="video-block__background" />
      <div className="container">
        <div className="video-block__inner">
          <div className="video-block__video-wrap">
            <img
              src={telFrame}
              className="video-block__video-frame"
              alt="tel-frame"
            />
            <video
              src={content.videoBlockVideo.file.url}
              className="video-block__video"
              loop
              autoPlay
              playsInline
              muted
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoBlock
