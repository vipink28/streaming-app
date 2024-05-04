import React, { useEffect, useState } from 'react';
import axios from '../utility/axios';
import { apirequests } from '../utility/apireqeusts';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

function BrowseByGenre(props) {
    const { platform, genreid } = useParams();
    const [currentPlatform, setCurrentPlatform] = useState(null);

    const [videoByGenre, setVideoByGenre] = useState(null);
    const fetchVideoByGenre = async (platform, genreid) => {
        const response = await axios.get(apirequests.getVideoByGenre(platform, genreid));
        setVideoByGenre(response.data.results);
    }

    const [genreList, setGenreList] = useState(null);

    const fetchGenreList = async (platform) => {
        const response = await axios.get(apirequests.getGenreList(platform));
        setGenreList(response.data.genres);
    }

    useEffect(() => {
        if (platform) {
            fetchGenreList(platform);
            setCurrentPlatform(platform);
        }
    }, [platform])

    useEffect(() => {
        if (platform && genreid) {
            fetchVideoByGenre(platform, genreid);
        }
    }, [platform, genreid])


    const changePlatform = (e) => {
        let platform = e.target.value;
        fetchGenreList(platform);
        setCurrentPlatform(platform);
    }

    const changeGenre = (e) => {
        let genreid = e.target.value;
        fetchVideoByGenre(currentPlatform, genreid);
    }



    return (
        <div className='py-5'>
            <div className='container-fluid'>
                <div className='d-flex py-3 justify-content-end'>
                    <select name="platform" className='form-select' onChange={changePlatform}>
                        <option value="movie">Movie</option>
                        <option value="tv">Tv</option>
                    </select>

                    <select name="genre" className='form-select' onChange={changeGenre}>
                        {
                            genreList?.map((genre) => {
                                return (
                                    <option value={genre.id}>{genre.name}</option>
                                )
                            })
                        }

                    </select>
                </div>

                <div className='row gy-4'>
                    {
                        videoByGenre?.map((video) => {
                            return (
                                <div key={video?.id} className='col-md-3'>
                                    <Card video={video} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default BrowseByGenre;