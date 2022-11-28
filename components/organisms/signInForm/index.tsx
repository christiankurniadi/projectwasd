import React from 'react'

export default function SignInForm() {
  return (
    <>
    <header className="flex flex-jc-c container--pall">
      <img src="img/logo.png" alt="" />
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
        <div className="signup">New to WASD? <a href="sign-up.html">Create an account</a>.</div>
      </div>
    </section>
    </>
  )
}
