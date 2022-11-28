import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function signUp() {
  return (
    <>
    <div className="flex flex-ai-c flex-jc-se flex-column">
    <header className="flex flex-jc-sb flex-ai-c container--pall">
      <Link href="/">
        <Image width={500} height={500} className="header-img" src="/img/logo.png" alt="" />
      </Link>
      <Link href="/sign-in" legacyBehavior>
        <a>Sign In --></a>
      </Link>
    </header>
    <h4 className="join-title">Join WASD</h4>
    <h2 className="container--pall hide-for-mobile">Sign Up to be a part of our community!</h2>
    <section className="sign-up container--pall">
      <div className="form-wrapper">
        <form action="">
          <ul>
            <li>
              <label for="name">Full Name <span>*</span></label>
              <input type="text" id="name" required />
            </li>
            <li>
              <label for="email">Email Address <span>*</span></label>
              <input type="email" placeholder="youremail@email.com" id="email" required />
            </li>
            <li>
              <label for="password">Password <span>*</span></label>
              <input type="password" id="password" required />
              <p>Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.</p>
            </li>
            <li>
              <input type="submit" className="btn" value="Sign Up" />
            </li>
          </ul>
        </form>
      </div>
    </section>
    <div  className="container--pall terms">By creating an account, you agree to the <a href="#">Terms of Service</a>. For more information about WASD's privacy practices, see the <a href="#">WASD Privacy Statement</a>. We'll occasionally send you account-related emails.</div>
    </div>
    </>
  )
}
