import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, netflixOriginalsSelector } from '../features/tv/tvSlice';
import Header from '../components/Header';
import Row from '../components/Row';

function Homescreen(props) {

    const dispatch = useDispatch();
    const { status, data, error } = useSelector(netflixOriginalsSelector);
    // console.log(data?.results)

    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, [])



    return (
        <>
            <Header video={data?.results[Math.floor(Math.random() * data?.results.length)]} />
            <div className="container-fluid">
                <Row />
            </div>
        </>
    );
}

export default Homescreen;