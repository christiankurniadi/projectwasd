import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface AuthProps{
    isLogin?: boolean;
}

export default function Auth(props: AuthProps) {
    const {isLogin} = props;
    if(isLogin){
        return (
            <Link href="/sign-in" legacyBehavior>
            <a className="header__profile">
              <Image width={500} height={500} src="/icon/user-solid.svg" alt="cart" className="filter icon-profile" />
            </a>
            </Link>
        )
    }
  return (
    <Link href="/sign-in" legacyBehavior>
        <a className='btn hide-for-mobile'>Sign In</a>
    </Link>
  )
}
