import React, { useEffect, useState } from 'react';

function VideoPlayer(props) {
    const { videoArr } = props;
    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        if (videoArr) {
            const trailerData = videoArr?.find((item) => {
                return item.type === "Trailer"
            })
            setTrailer(trailerData);
        }
    }, [videoArr])

    return (
        trailer ?
            <div className="ratio ratio-16x9">
                < iframe src={`https://www.youtube.com/embed/${trailer.key}?rel=0&autoplay=1&mute=1`} title="YouTube video" allowfullscreen ></iframe >
            </div> : "No Trailer to display"
    );
}

export default VideoPlayer;