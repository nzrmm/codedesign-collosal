import {useState} from 'react';
import cx from 'classnames';
import Image from 'next/image';
import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import {
  Typography,
  CardTestimonial,
} from '@/components';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  const [testimonials] = useState([
    {
      name: 'Courtney Henry',
      company: 'Biffco Enterprises Ltd.',
      photo: '/images/avatar-01.png',
      description: `"Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable."`
    },
    {
      name: 'Esther Howard',
      company: 'Abstergo Ltd.',
      photo: '/images/avatar-02.png',
      description: `"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business."`
    },
    {
      name: 'Ronald Richards',
      company: 'Barone LLC.',
      photo: '/images/avatar-03.png',
      description: `"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "`
    },
  ]);

  return (
    <div className={cx('px-16 mb-28')}>
      <div className={cx('flex flex-col items-center')}>
        <Typography variant='textBase' customClassName='!font-semibold !text-primary03 tracking-widest mb-1'>
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
        className="mySwiper !py-24"
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <CardTestimonial 
                  isActive={isActive}
                  testimonial={testimonial}
                />
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Testimonial