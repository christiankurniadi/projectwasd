import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
    <footer className="footer container--pall flex">
      <div className="footer__about flex">
        <h4>about</h4>
        <a className="footer-link" href="#">About us</a>
        <a className="footer-link" href="#">Careers</a>
        <a className="footer-link" href="#">Contact</a>
      </div>
      <div className="footer__collaborate flex">
        <h4>collaborate with us</h4>
        <a className="footer-link" href="#">For Brands and Designers</a>
      </div>
      <div className="footer__support flex">
        <h4>support</h4>
        <a className="footer-link" href="#">Help Center</a>
        <a className="footer-link" href="#">Community Guidelines</a>
      </div>

      <div className="footer__logo">
        <a className="footer-link" href="#"> <Image width={500} height={500} className="footer-img" src="/img/logo.png" alt="logo" /></a>
      </div>
      <div className="footer__copyright">
        <p>&copy; 2022 WASD</p>
      </div>
    </footer>
    </>
  )
}
