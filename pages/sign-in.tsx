import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SignIn() {
  return (
    <>
    <div className="flex flex-ai-c flex-jc-c flex-column body">
    <header className="flex flex-jc-c container--pall">
      <Link href="/">
        <Image width={500} height={500} className="header-img" src="/img/logo.png" alt="" />
      </Link>
    </header>
    <h2 className="container--pall">Sign In to WASD</h2>
    <section className="sign-in container--pall">
      <div className="form-wrapper">
        <form action="">
          <ul>
            <li>
              <label for="email">Email Address <span>*</span></label>
              <input type="email" id="email" required />
            </li>
            <li>
              <label for="password">Password <span>*</span></label>
              <input type="password" id="password" required />
            </li>
            <li>
              <input type="submit" className="btn" value="Sign In" />
            </li>
          </ul>
        </form>
        <div className="signup">New to WASD?  
        <Link href="/sign-up" legacyBehavior>
          <a>Create an account</a>
        </Link>.
        </div>
      </div>
    </section>
    </div>
    </>
  )
}
