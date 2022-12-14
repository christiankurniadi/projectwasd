import React from 'react'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import Image from 'next/image'

export default function detail() {
  return (
    <>
    <Header />
    <section className="detail pt-lg-60 pb-50">
      <div className="container-xxl container-fluid">
        <div className="detail-header pb-50">
          {/* <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
          <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p> */}
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
            <div className="row align-items-center">
              <div className="col-md-12 col-4">
                <Image src="/img/keycaps.jpg" width="280" height="380" className="img-fluid" alt="" />
              </div>
              {/* <!-- Mobile: Game title --> */}
              <div className="col-md-12 col-8 d-md-none d-block">
                <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
                  Ducky One Tuxedo<br />
                  Mechanical Keyboard
                </h2>
                <p className="text-sm color-palette-2 text-start mb-0">Category: Keyboard</p>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
            {/* <!-- Desktop: Game title --> */}
            <div className="pb-50 d-md-block d-none">
              <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
              Ducky One Tuxedo<br />
                  Mechanical Keyboard
              </h2>
              <p className="text-lg color-palette-2 mb-0">Category: Keyboard</p>
            </div>
            <hr />
            <form action="./checkout.html" method="POST">
              <div className="pt-md-50 pt-30">
                <div className="">
                  <label for="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">Address</label>
                  <input type="text" className="form-control  text-lg" id="ID" name="ID" aria-describedby="verifyID" placeholder="Enter your Address" />
                </div>
              </div>
              <div className="pt-md-50 pb-md-50 pt-30 pb-20">
                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Switch</p>
                <div className="row justify-content-between">
                  <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10" for="topup1">
                    <input className="d-none" type="radio" id="topup1" name="topup" value="topup1" />
                    <div className="detail-card">
                      <div className="d-flex justify-content-between">
                        <p className="text-3xl color-palette-1 m-0">
                          Gateron Blue
                        </p>
                        <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                          <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <p className="text-lg color-palette-1 m-0">Rp 3.250.000</p>
                    </div>
                  </label>
                  <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10" for="topup2">
                    <input className="d-none" type="radio" id="topup2" name="topup" value="topup2" />
                    <div className="detail-card">
                      <div className="d-flex justify-content-between">
                        <p className="text-3xl color-palette-1 m-0">
                        Gateron Brown
                        </p>
                        <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                          <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <p className="text-lg color-palette-1 m-0">Rp 3.250.000</p>
                    </div>
                  </label>
                  <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10" for="topup3">
                    <input className="d-none" type="radio" id="topup3" name="topup" value="topup3" />
                    <div className="detail-card">
                      <div className="d-flex justify-content-between">
                        <p className="text-3xl color-palette-1 m-0">
                        Gateron Red
                        </p>
                        <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                          <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <p className="text-lg color-palette-1 m-0">Rp 3.250.000</p>
                    </div>
                  </label>
                  <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10" for="topup4">
                    <input className="d-none" type="radio" id="topup4" name="topup" value="topup4" />
                    <div className="detail-card">
                      <div className="d-flex justify-content-between">
                        <p className="text-3xl color-palette-1 m-0">
                        Cherry MX Blue
                        </p>
                        <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                          <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <p className="text-lg color-palette-1 m-0">Rp 3.250.000</p>
                    </div>
                  </label>
                  <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10" for="topup5">
                    <input className="d-none" type="radio" id="topup5" name="topup" value="topup5" />
                    <div className="detail-card">
                      <div className="d-flex justify-content-between">
                        <p className="text-3xl color-palette-1 m-0">
                        Cherry MX Brown
                        </p>
                        <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                          <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <p className="text-lg color-palette-1 m-0">Rp 3.250.000</p>
                    </div>
                  </label>
                  <div className="col-lg-4 col-sm-6">
                  </div>
                </div>
              </div>
              <div className="pb-md-50 pb-20">
                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
                <fieldset id="paymentMethod">
                  <div className="row justify-content-between">
                    <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10" for="transfer">
                      <input className="d-none" type="radio" id="transfer" name="paymentMethod" value="transfer" />
                      <div className="detail-card">
                        <div className="d-flex justify-content-between">
                          <p className="text-3xl color-palette-1 fw-medium m-0">Transfer</p>
                          <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                            <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                        <p className="text-lg color-palette-1 m-0">Worldwide Available</p>
                      </div>
                    </label>
                    <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10" for="visa">
                      <input className="d-none" type="radio" id="visa" name="paymentMethod" value="visa" />
                      <div className="detail-card">
                        <div className="d-flex justify-content-between">
                          <p className="text-3xl color-palette-1 fw-medium m-0">VISA</p>
                          <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                            <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                        <p className="text-lg color-palette-1 m-0">Credit Card</p>
                      </div>
                    </label>
                    <div className="col-lg-4 col-sm-6">
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="pb-50">
                <label for="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">Bank Account Name</label>
                <input type="text" className="form-control text-lg" id="bankAccount" name="bankAccount" aria-describedby="bankAccount" placeholder="Enter your Bank Account Name" />
              </div>
              <div className="d-sm-block d-flex flex-column w-100">
                {/* <a href="./checkout.html" type="submit" className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Continue</a> */}
                 <button type="submit"className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Continue</button> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}
