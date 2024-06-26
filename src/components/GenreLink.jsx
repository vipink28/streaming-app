import React from 'react';
import { Link } from 'react-router-dom';

function GenreLink(props) {
    const { genres, platform } = props;
    return (
        <div className='d-flex gap-2 py-2'>
            {
                genres?.map((genre) => {
                    return (
                        <Link key={genre?.id} to={`/browsebygenre/${platform}/${genre?.id}`} class="badge text-bg-warning">{genre.name}</Link>
                    )
                })
            }
        </div>
    );
}

export default GenreLink;