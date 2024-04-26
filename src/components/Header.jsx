import React, { useEffect, useState } from 'react';
import { image_base_url } from '../utility/apireqeusts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderVideo, headerVideoSelector } from '../features/common/commonSlice';
import GenreLink from './GenreLink';
import Ratings from './Ratings';
import VideoPlayer from './VideoPlayer';

function Header(props) {
    const [showPlayer, setShowPlayer] = useState(false);
    const { video } = props;
    const { data, status, error } = useSelector(headerVideoSelector);

    const dispatch = useDispatch();
    useEffect(() => {
        if (video) {
            dispatch(fetchHeaderVideo({ platform: "tv", id: video.id }));
        }
    }, [video])

    const showVideo = () => {
        setShowPlayer(true);
    }

    return (
        <div className='position-relative vh-100'>
            {
                showPlayer ?
                    <VideoPlayer videoArr={data?.videos.results} />
                    :
                    <>
                        <img className='header-img' src={`${image_base_url}${data?.backdrop_path}`} alt="" />
                        <div className='caption'>
                            <h1 className='title display-3'>{data?.name || data?.original_name || data?.title || data?.original_title}</h1>
                            <p className='lead'>{data?.overview}</p>
                            <GenreLink genres={data?.genres} />
                            <Ratings voteAverage={data?.vote_average} voteCount={data?.vote_count} />
                            <button className='btn btn-danger' onClick={showVideo}>Play</button>
                            <button className='btn btn-warning ms-2'>More Info</button>
                        </div>

                        <div className='header-vignette'></div>
                        <div className='header-bottom-vignette'></div>
                    </>
            }
        </div>
    );
}

export default Header;