import React, { useState } from 'react'
import style from './Nav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import cx from 'classnames'

const Nav = (): JSX.Element => {
  cx.bind(style)
  const [currentPage, setcurrentPage] = useState('home')
  return (
    <nav className={style.nav}>
      <Link to='/' onClick={() => setcurrentPage('home')}>
        <FontAwesomeIcon className={cx({ [style.active]: currentPage === 'home' })} icon={faHouse} />
      </Link>
      <Link to='/favorite' onClick={() => setcurrentPage('favorite')}>
        <FontAwesomeIcon className={cx({ [style.active]: currentPage === 'favorite' })} icon={faBookmark} />
      </Link>
    </nav>
  )
}

export default Nav
