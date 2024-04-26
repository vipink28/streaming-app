import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { fetchNetflixOriginals, netflixOriginalsSelector } from '../features/tv/tvSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies, upcomingMoviesSelector } from '../features/movie/movieSlice';

function Browse(props) {
    const { platform } = useParams();
    const dispatch = useDispatch();
    const { data, error, status } = useSelector(platform === "tv" ? netflixOriginalsSelector : upcomingMoviesSelector)
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
        </>
    );
}

export default Browse;