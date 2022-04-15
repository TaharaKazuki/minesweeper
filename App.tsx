import type { FC, ReactChild } from 'react'
import React from 'react'

interface LinkProp {
  href: string
  target?: '_blank'
  rel?: string
  children: ReactChild
}

const Link: FC<LinkProp> = ({ children, ...restProps }) => {
  return (
    <a className="App-link" {...{ ...restProps }}>
      {children}
    </a>
  )
}

export default Link
