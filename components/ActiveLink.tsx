import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { CSSProperties }  from 'react'
import { DetailedHTMLProps,HTMLAttributes, ReactNode } from "react";

export interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>{
  href: string
  text?: string
}

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

export const ActiveLink = ({text, href}:IProps) => {

  const { asPath } = useRouter()

  return (
    <Link href={href}>
      <a style={ asPath === href ? style: undefined}>
        {text}
      </a>
    </Link>
  )
}
