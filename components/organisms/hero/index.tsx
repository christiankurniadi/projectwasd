import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
    <section className="hero container--pall flex flex-ai-c">
      <div className="hero__text container--pall">
        <h1>Illest mechanical keyboard in the game</h1>
        <p>The mechanical keyboard you never knew you need. Offering a clickity clack sensation that you would never forget.</p>
        <div className="cta flex">
          <button className="btn">View product</button>
          <button className="btn">Pre-order now</button>
        </div>
      </div>
      <div className="hero__image container--pall">
        <Image width={500} height={150} src="/img/hero.png" className="hero-img" alt="keyboard" />
      </div>
    </section>
    </>
  )
}
