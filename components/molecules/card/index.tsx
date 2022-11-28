import React from 'react'
import Image from 'next/image'

interface cardProps{
  src: string;
  title: string;
  desc: string;
  price: string;
}

export default function Card(props : cardProps) {
  const {title, src, price, desc} = props;
  return (
    <>
    <div className="card" >
          <Image width={100} height={200} src={src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <h4>{price}</h4>
          </div>
          <div className="card-body d-flex flex-column justify-content-center align-items-center gap-1">
            <a href="#" className="card-link card-btn">View product</a>
            <a href="#" className="card-link card-btn">Buy now</a>
          </div>
        </div>
    </>
  )
}
