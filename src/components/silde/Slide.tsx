// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { Autoplay } from 'swiper/modules';
import { useState } from 'react';

import { InfoIcon, PlayIcon } from '@/icon';
import { urlFilm } from '@/components/urlFilm/urlFilm';
//import Menu from '@/components/menu/Menu';

export default function Slides() {
  const [urlActive, setUrlActive] = useState<string>('');

  const [nameFlim, setNameFilm] = useState<string>('');

  const handleSlideTransform = (swiper) => {
    swiper.slides.forEach((slide) => {
      const slideProgress = slide.progress;
      const scale = 1 - Math.min(Math.abs(slideProgress), 1) * 0.3; // Giảm kích thước cho slide không trung tâm
      slide.style.transform = `scale(${scale})`;
    });
  };

  const handleSlideChange = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const activeName = activeSlide.getAttribute('data-name');
    setNameFilm(activeName);
    setUrlActive(swiper.slides[swiper.activeIndex].querySelector('img').src);
  };

  return (
    <div
      className="w-full h-full flex justify-end items-end font-manrope relative pb-3"
      style={{
        backgroundImage: `url(${urlActive})`,
        backgroundSize: 'cover',
        objectFit: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <div
        className="absolute transition-all duration-500 inset-0 text-center w-full text-white text-[20px] font-semibold  h-full flex flex-col    justify-end items-start gap-2 px-10 bg-black bg-opacity-70 pb-32
              "
      >
        <h1 className="text-[50px] max-w-[800px]  text-left font-medium font-sans">
          {nameFlim.toLocaleUpperCase()}
        </h1>
        <div className="flex gap-4">
          <button
            className="transition-all duration-300 flex px-6 py-2 items-center gap-4 rounded-xl bg-white text-black  text-xl  
          hover:text-white hover:bg-red-600
          "
          >
            <PlayIcon></PlayIcon> Play
          </button>
          {/*<Button className="px-10 py-5 text-xl bg-gray-400 bg-opacity-30 text-white">
            <InfoIcon></InfoIcon> More Info
          </Button>*/}
          <button
            className="transition-all duration-300 flex px-5 py-2 items-center gap-4 rounded-xl  text-xl bg-gray-400 bg-opacity-70 text-white  hover:bg-slate-600
          hover:text-white
          "
          >
            <InfoIcon></InfoIcon> More Info
          </button>
        </div>
      </div>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={4}
        className="mySwiper"
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        //autoplay={{
        //  delay: 4500,
        //  disableOnInteraction: false,
        //}}
        modules={[Autoplay]}
        onSetTranslate={handleSlideTransform} // Gọi khi slide được dịch chuyển
        onProgress={handleSlideTransform} // Gọi khi slide đang cuộn
        onSlideChange={handleSlideChange}
      >
        {urlFilm.map((item, index) => {
          //const nameFilm = item.name.toLocaleUpperCase();
          //setNameFilm(nameFilm);
          return (
            <SwiperSlide
              key={index}
              className="    shadow-xl z-40"
              data-name={item.name}
            >
              <img
                src={item.url}
                alt={item.alt}
                className="object-cover z-40"
              />
              <div
                className="absolute transition-all duration-500 inset-0 text-center w-full text-white text-[20px] font-semibold  h-full bg-black  bg-opacity-50 flex flex-col 
                justify-end items-center gap-2 hover:bg-opacity-60
              "
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
