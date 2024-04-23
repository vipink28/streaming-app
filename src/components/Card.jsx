import React from 'react';
import { image_base_url } from '../utility/apireqeusts';

function Card(props) {
    const { video } = props;

    const obj = {
        id: 1, name: "Vipin", salary: 25000, address: {
            city: "Chandigarh"
        }
    };
    const arr = ["maruti", "toyota", "mercedes"];

    //destructuring

    const { salary, id, name, address } = obj;

    const { city } = address;


    let [first, second, third] = arr;






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