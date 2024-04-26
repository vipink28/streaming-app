import React from 'react';
import { image_base_url } from '../utility/apireqeusts';
import Ratings from '../components/Ratings';
import { useNavigate } from 'react-router-dom';


function Card(props) {
    const { video, platformType } = props;
    const navigate = useNavigate();
    const showDetails = () => {
        navigate(`/details/${platformType}/${video?.id}`)
    }
    return (
        <div className='card text-white' onClick={showDetails}>
            <img className='card-img-top' src={`${image_base_url}${video?.backdrop_path}`} alt="" />
            <div className="card-body">
                <h5 className='card-title'>{video?.name || video?.original_name || video?.title || video?.original_title}</h5>
                <Ratings voteCount={video?.vote_count} voteAverage={video?.vote_average} />
            </div>
        </div>
    );
}

export default Card;