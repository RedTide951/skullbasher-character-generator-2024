import React from 'react';
import './VideoBackground.css';  // Ensure you have this CSS file in your project

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop playsInline>
        <source src="/BGvideo-sparks2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
