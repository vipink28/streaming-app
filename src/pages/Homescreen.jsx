import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, netflixOriginalsSelector } from '../features/tv/tvSlice';
import Header from '../components/Header';
import Row from '../components/Row';
import { fetchPopularMovies, fetchUpcomingMovies, popularMoviesSelector, upcomingMoviesSelector } from '../features/movie/movieSlice';
import { platformType } from '../utility/apireqeusts';

function Homescreen(props) {

    const dispatch = useDispatch();
    const { status, data, error } = useSelector(netflixOriginalsSelector);
    // console.log(data?.results)

    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, [])



    return (
        <>
            <Header video={data?.results[Math.floor(Math.random() * data?.results.length)]} platform={platformType.tv} />
            <div className="container-fluid">
                <Row title="Upcoming Movies" action={fetchUpcomingMovies} selector={upcomingMoviesSelector} platformType={platformType.movie} />

                <Row title="Netflix Originals" action={fetchNetflixOriginals} selector={netflixOriginalsSelector} platformType={platformType.tv} />

                <Row title="Popular Movies" action={fetchPopularMovies} selector={popularMoviesSelector} platformType={platformType.movie} />

            </div>
        </>
    );
}

export default Homescreen;