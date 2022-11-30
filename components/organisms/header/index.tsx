import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
import Auth from './Auth'
import Script from 'next/script'

export default function Header() {
  return (
    <>
    <header className="header">
      <div className="overlay">
        <Menu className='link' title="Shop" href='#shop'/>
        <Menu className='link' title="About" href='#about'/>
        <Menu className='link' title="Subscribe" href='#subscribe'/>
        <Link href="/sign-in" legacyBehavior>
          <a className='btn'>Sign In</a>
        </Link>
      </div>
      <nav className="container--pall flex flex-jc-sb flex-ai-c">
        <a id="btnHamburger" href="#" className="header__menu hide-for-desktop">
          <span></span>
          <span></span>
          <span></span>
        </a>
        <Link href="/" legacyBehavior>
        <a  className="header__logo">
          <Image src="/img/logo.png" width={500} height={500} className="img-logo" alt="logo" />
        </a>
        </Link>
        <div className="header__links hide-for-mobile">
          <Menu title="Shop" href='#shop'/>
          <Menu title="About" href='#about'/>
          <Menu title="Subscribe" href='#subscribe'/>
        </div>
      <Auth />
      </nav>
    </header>
    <Script src='/static/script.js'></Script>
    </>
  )
}
