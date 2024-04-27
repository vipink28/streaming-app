import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { netflixOriginalsSelector } from '../features/tv/tvSlice';
import Card from './Card';
import { fetchUpcomingMovies, upcomingMoviesSelector } from '../features/movie/movieSlice';
import { apirequests } from '../utility/apireqeusts';
import axios from '../utility/axios';

function Row(props) {
    const { title, action, selector, platformType, genre } = props;
    const collection = useSelector(!genre ? selector : (state) => state);
    const dispatch = useDispatch();
    const [videoByGenre, setVideoByGenre] = useState(null);

    const fetchVideoByGenre = async (platform, genreid) => {
        const response = await axios.get(apirequests.getVideoByGenre(platform, genreid));
        console.log(response);
        setVideoByGenre(response.data.results);
    }

    useEffect(() => {
        if (genre) {
            fetchVideoByGenre(platformType, genre.id)
        }
    }, [genre])


    useEffect(() => {
        if (!genre) {
            dispatch(action())
        }
    }, [genre])

    return (
        <div className='py-3'>
            <h3>{title}</h3>

            <Swiper
                spaceBetween={20}
                slidesPerView={5}
            >
                {
                    genre ?
                        videoByGenre?.map((video) => {
                            return <SwiperSlide><Card video={video} platformType={platformType} /></SwiperSlide>
                        })
                        :
                        collection.data?.results.map((video) => {
                            return <SwiperSlide><Card video={video} platformType={platformType} /></SwiperSlide>
                        })
                }
            </Swiper>
        </div>
    );
}

export default Row;