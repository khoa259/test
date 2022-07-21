import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HomePage from '@/components/Homepage'


const Home: NextPage = () => {
  return (
    
    <div className={styles.container}>
        <Header/>
        
      <main className={styles.main}>
          <HomePage/>
      </main>
      <Footer/>
      </div>
  )
}

export default Home
