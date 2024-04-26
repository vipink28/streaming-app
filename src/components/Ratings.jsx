import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

function Ratings(props) {
    const { voteAverage, voteCount } = props;
    let voteVal = Math.floor(voteAverage / 2);
    const starArr = [...Array(5)];

    return (
        <div className='py-2 d-flex align-items-center text-white'>
            <div className='d-flex align-items-center'>
                {
                    starArr.map((item, index) => {
                        return (
                            index < voteVal ?
                                <FontAwesomeIcon className='text-warning' icon={faSolidStar} /> :
                                <FontAwesomeIcon icon={faStar} />
                        )
                    })
                }
            </div>

            <p className='ms-2 mb-0'>{voteCount}</p>
        </div>
    );
}

export default Ratings;