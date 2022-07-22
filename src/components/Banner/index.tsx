import React from 'react'
import styles from './banner.module.scss'

import {Swiper,SwiperSlide} from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay} from 'swiper'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div>
      <Swiper 
      // aos
      // data-aos="zoom-in-up"
      // slide
       loop={true}
       loopFillGroupWithBlank={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination , Autoplay]}
        className= {styles.mySwiper}
      >
        <SwiperSlide className={styles.SwiperSlide} >
          <img src="https://i.imgur.com/APB6sCF.jpg"  width={300}/>
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide} >
          <img src="https://i.imgur.com/DEK1iyc.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide} >
          <img src="https://i.imgur.com/d5BQrZj.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide} >
          <img src="https://i.imgur.com/QmVRN1d.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide} >
          <img src="https://i.imgur.com/swIymys.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide} >
          <img src="https://i.imgur.com/NIt2PEs.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <img src="https://i.imgur.com/K4r2m3e.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <img src="https://i.imgur.com/ChsCufw.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <img src="https://i.imgur.com/cTVFzUU.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner