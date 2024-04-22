import React from 'react';
import { image_base_url } from '../utility/apireqeusts';

function Header(props) {
    const { video } = props;
    // console.log(video);
    return (
        <div className='position-relative vh-100'>
            <img className='header-img' src={`${image_base_url}${video?.backdrop_path}`} alt="" />
            <div className='caption'>
                <h1 className='title display-3'>{video?.name || video?.original_name || video?.title || video?.original_title}</h1>
                <p className='lead'>{video?.overview}</p>
                <button className='btn btn-danger'>Play</button>
                <button className='btn btn-warning ms-2'>More Info</button>
            </div>

            <div className='header-vignette'></div>
            <div className='header-bottom-vignette'></div>
        </div>
    );
}

export default Header;