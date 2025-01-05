import Card from '@/components/card/Card';
//import SlideFlim from '@/components/slideFilm/SlideFlim';
import { urlFilm } from '@/components/urlFilm/urlFilm';
import { Link } from 'react-router';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/navigation';

import './slideF.css';
import { Autoplay } from 'swiper/modules';
const ListCart = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-between items-center">
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          modules={[Autoplay]}
          //autoplay={{
          //  delay: 4500,
          //  disableOnInteraction: false,
          //}}
          //pagination={{
          //  clickable: true,
          //}}

          className="mySwiper "
        >
          {urlFilm.map((item, index) => {
            const nameFilm: string =
              item.name.length > 32
                ? item.name.slice(0, 32).concat('...')
                : item.name;

            return (
              <SwiperSlide key={index} className="bg-slate-700 rounded-xl">
                <Link to={`/movie/${item.name}`}>
                  <Card urlFlim={item.url} name={nameFilm}></Card>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
};

export default ListCart;
