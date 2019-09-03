import React, { useState, useEffect } from 'react';

import VideoBackground from './VideoBackground/VideoBackground';

const Home = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const isResizing = e => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", isResizing);

        return () => {
            window.removeEventListener("resize", isResizing);
        };
    }, []);

    return (
        <div className="home__container">
            {screenWidth > 500 ? <VideoBackground /> : null}

        </div>
    )
};

export default Home;
