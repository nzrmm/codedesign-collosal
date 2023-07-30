import cx from 'classnames';
import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import {Typography, CardTestimonial} from '@/components';

import {testimonials} from '@/data';

import styles from './testimonial.module.css';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <div className={cx('px-16 mb-28 relative')}>
      {/* Glassmorphism effect */}
      <div
        className={cx('glass-effect', styles['glass-effect-primary02'])}
      ></div>
      <div
        className={cx('glass-effect', styles['glass-effect-primary03'])}
      ></div>

      <div className={cx('flex flex-col items-center')}>
        <Typography
          variant='textBase'
          customClassName='!font-semibold !text-primary03 tracking-widest mb-1'
        >
          TESTIMONIAL
        </Typography>

        <Typography variant='text3Xl' customClassName='mb-7 text-center'>
          What do our clients say that we <br />
          never let down?
        </Typography>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={32}
        pagination={true}
        centeredSlides={true}
        modules={[Pagination]}
        className='mySwiper !py-24'
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => {
          return (
            <SwiperSlide key={index}>
              {({isActive}) => (
                <CardTestimonial isActive={isActive} data={testimonial} />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
