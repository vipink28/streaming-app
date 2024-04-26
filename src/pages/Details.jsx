import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideoDetails, videoDetailsSelector } from '../features/common/commonSlice';
import VideoPlayer from '../components/VideoPlayer';
import { image_base_url } from '../utility/apireqeusts';

function Details(props) {
    const { platform, id } = useParams();
    const dispatch = useDispatch();

    const { status, data, error } = useSelector(videoDetailsSelector);

    useEffect(() => {
        if (platform && id) {
            dispatch(fetchVideoDetails({ platform: platform, id: id }))
        }
    }, [platform, id])

    return (
        <div className='container-fluid'>
            <div className='container'>
                <VideoPlayer videoArr={data?.videos.results} />
            </div>

            <div className='row py-5'>
                <div className="col-md-3">
                    <img className='img-fluid' src={`${image_base_url}${data?.poster_path}`} alt="" />
                </div>
                <div className="col-md-9">
                    <h1 className='title display-3'>{data?.name || data?.original_name || data?.title || data?.original_title}</h1>
                    <p className='lead'>{data?.overview}</p>
                </div>
            </div>

        </div>
    );
}

export default Details;