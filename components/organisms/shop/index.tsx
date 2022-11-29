import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Shop() {
  return (
    <>
        <section id="shop" className="shop flex container--pall">
      <div className="shop__keyboards flex">
        <h2>shop mechanical keyboards</h2>
        <p>We believe typing should be a joy, not a chore, which is why we are here to provide everyone with a nice-looking and comfortable keyboard. Explore our Mechanical Keyboards and elevate your typing experience.</p>
      <Link href="/shop" legacyBehavior>
      <a >
          <div className="shop__image">
            <Image width={500} height={500} className="shop-img" src="/img/keyboard.jpg" alt="keyboard" />
          </div>
        </a>
      </Link>
      </div>
      <div className="shop__keycaps flex">
        <h2>shop keycaps</h2>
        <p>Who doesn't want nice-looking keycaps? We believe everyone is a fan of nice keycaps. Explore our Keycaps collections to satisfy your eyes and flex it to the world!</p>
        <a href="#">
          <div className="shop__image">
            <Image width={500} height={500} className="shop-img" src="/img/keycaps.jpg" alt="keycaps" />
          </div>
        </a>
      </div>
    </section>
    </>
  )
}
