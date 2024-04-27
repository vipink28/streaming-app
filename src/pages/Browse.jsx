import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Row from '../components/Row';
import { fetchNetflixOriginals, netflixOriginalsSelector } from '../features/tv/tvSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies, upcomingMoviesSelector } from '../features/movie/movieSlice';
import axios from '../utility/axios';
import { apirequests } from '../utility/apireqeusts';
import { shuffle } from '../utility';


function Browse(props) {
    const { platform } = useParams();
    const dispatch = useDispatch();
    const { data, error, status } = useSelector(platform === "tv" ? netflixOriginalsSelector : upcomingMoviesSelector)

    const [genreList, setGenreList] = useState(null);

    const fetchGenreList = async (platform) => {
        const response = await axios.get(apirequests.getGenreList(platform));
        setGenreList(shuffle(response.data.genres));
    }

    useEffect(() => {
        if (platform) {
            fetchGenreList(platform);
        }
    }, [platform])


    useEffect(() => {
        if (platform === "tv") {
            dispatch(fetchNetflixOriginals());

        } else {
            dispatch(fetchUpcomingMovies());
        }
    }, [platform])


    return (
        <>
            <Header video={data?.results[Math.floor(Math.random() * data?.results.length)]} platform={platform} />
            <div className="container-fluid">
                {
                    genreList?.map((genre, index) => {
                        return (
                            index < 2 ?
                                <Row title={genre?.name} platformType={platform} genre={genre} />
                                : ""
                        )
                    })
                }
            </div>
        </>
    );
}

export default Browse;