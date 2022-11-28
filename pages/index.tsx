import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/organisms/header/index'
import Hero from '../components/organisms/hero/index'
import Shop from '../components/organisms/shop'
import About from '../components/organisms/about'
import Subscribe from '../components/organisms/subscribe'
import Footer from '../components/organisms/footer'


const Home: NextPage = () => {
  return (
    <>
    <Header />
    <Hero />
    <Shop />
    <About />
    <Subscribe />
    <Footer />
    </>
  )
}

export default Home
