import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { netflixOriginalsSelector } from '../features/tv/tvSlice';
import Card from './Card';
import { fetchUpcomingMovies, upcomingMoviesSelector } from '../features/movie/movieSlice';

function Row(props) {
    const { title, action, selector, platformType } = props;
    const collection = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(action())
    }, [])

    return (
        <div className='py-3'>
            <h3>{title}</h3>

            <Swiper
                spaceBetween={20}
                slidesPerView={5}
            >
                {
                    collection.data?.results.map((video) => {
                        return <SwiperSlide><Card video={video} platformType={platformType} /></SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );
}

export default Row;