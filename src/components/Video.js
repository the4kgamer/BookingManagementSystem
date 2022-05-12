import React from 'react'

function Video() {
  return (
    <div className='video-container'>
      <video src="/videos/planevideo.mp4" autoPlay loop />
      <h1>Come fly with us.</h1>
      <p>For quick cheap trips and more!</p>
    </div>
  )
}

export default Video