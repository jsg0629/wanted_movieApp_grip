import React from 'react'
import style from './Serch.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Serch = (): JSX.Element => {
  return (
    <div className={style.serchInputWrraper}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={style.serchIcon} />
      <input className={style.serchInput} type='text' placeholder='Search' />
    </div>
  )
}

export default Serch
