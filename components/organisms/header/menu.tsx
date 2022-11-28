import React from 'react'

interface MenuProps{
    title: string;
    href: string;
    className?: string;
}

export default function Menu(props: MenuProps) {
    const {title, href, className} = props;
  return (
    <a className={className} href={href}>{title}</a>
  )
}
