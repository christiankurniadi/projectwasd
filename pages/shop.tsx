import React from 'react'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import Card from '../components/molecules/card'

export default function Shop() {
  return (
    <>
    <Header />
    <section className="vapes">
      <div className="container--px d-flex flex-wrap gap-5 justify-content-center">
        <Card src='/img/keycaps.jpg' title='KeyChron V2' desc="Badasss mech keys" price='$50'/>
        <Card src='/img/keycaps.jpg' title='Ducky One Tuxedo' desc="baksbdlasbdl" price='$50'/>
        <Card src='/img/keycaps.jpg' title='KeyChron V2' desc="Badasss mech keys" price='$50'/>
        <Card src='/img/keycaps.jpg' title='KeyChron V2' desc="Badasss mech keys" price='$50'/>
        <Card src='/img/keycaps.jpg' title='KeyChron V2' desc="Badasss mech keys" price='$50'/>
        <Card src='/img/keycaps.jpg' title='KeyChron V2' desc="Badasss mech keys" price='$50'/>
      </div>
    </section>
    <Footer />
    </>
  )
}
