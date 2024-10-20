// Slider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
// Import required Swiper modules
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // Swiper core styles

import banner1 from '../assets/media/banner1.png';
import banner2 from '../assets/media/banner2.png';
import banner3 from '../assets/media/banner3.png';

const Slider = () => {
  const images = [
    { id: 1, src: banner1, alt: 'Banner 1' },
    { id: 2, src: banner2, alt: 'Banner 2' },
    { id: 3, src: banner3, alt: 'Banner 3' },
  ];

  return (
    <div className="w-full mx-auto mt-12">
      <Swiper
        modules={[Autoplay]} // Add Autoplay module here
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="slider-cont w-full rounded-lg overflow-hidden shadow-lg"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[80vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
