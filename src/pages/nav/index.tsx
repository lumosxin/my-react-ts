import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Nav: FC<IProps> = () => {
  return (
    <div id='nav'>
      <Link to='/'>首页</Link>
      <Link to='/login'>登录</Link>
    </div>
  )
}

export default memo(Nav)