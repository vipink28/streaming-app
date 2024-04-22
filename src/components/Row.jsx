import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSelector } from 'react-redux';
import { netflixOriginalsSelector } from '../features/tv/tvSlice';
import Card from './Card';

function Row(props) {
    const netflixOriginals = useSelector(netflixOriginalsSelector);

    return (
        <div className='py-3'>
            <h3>Row Title</h3>

            <Swiper
                spaceBetween={20}
                slidesPerView={5}
            >
                {
                    netflixOriginals.data?.results.map((video) => {
                        return <SwiperSlide><Card video={video} /></SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );
}

export default Row;