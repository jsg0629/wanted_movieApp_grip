import React from 'react'
import style from './Nav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Nav = (): JSX.Element => {
  return (
    <nav className={style.nav}>
      <Link to='/'>
        <FontAwesomeIcon icon={faHouse} />
      </Link>
      <Link to='/favorite'>
        <FontAwesomeIcon icon={faBookmark} />
      </Link>
    </nav>
  )
}

export default Nav
