import React from 'react';

import videoMp4 from '../../../assets/backgroundVideo/MP4/background.mp4';
import videoWebm from '../../../assets/backgroundVideo/WEBM/background.webm';

const VideoBackground = () => (
    <>
        <video className="home__video--background" autoPlay muted loop>
            <source src={videoMp4} type="video/mp4" />
            <source src={videoWebm} type="video/webm" />
            Your Browser is not Supported!
        </video>
    </>
);

export default VideoBackground;
