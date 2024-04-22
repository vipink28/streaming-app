import React from 'react';
import { image_base_url } from '../utility/apireqeusts';

function Card(props) {
    const { video } = props;
    return (
        <div className='card text-white'>
            <img className='card-img-top' src={`${image_base_url}${video?.backdrop_path}`} alt="" />
            <div className="card-body">
                <h5 className='card-title'>{video?.name || video?.original_name || video?.title || video?.original_title}</h5>
            </div>
        </div>
    );
}

export default Card;