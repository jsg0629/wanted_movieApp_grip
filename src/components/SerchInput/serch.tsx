import React, { useState } from 'react'
import style from './Serch.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useSetRecoilState } from 'recoil'
import { searchValue } from 'hooks/atoms'

const Serch = (): JSX.Element => {
  const setSearchValue = useSetRecoilState(searchValue)
  const [chagedInputValue, setChagedInputValue] = useState('')
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setSearchValue(chagedInputValue)
    setChagedInputValue('')
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setChagedInputValue(e.currentTarget.value)
  }

  return (
    <div className={style.serchInputWrraper}>
      <form onSubmit={handleFormSubmit}>
        <button type='submit'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={style.serchIcon} />
        </button>
        <input
          className={style.serchInput}
          type='text'
          value={chagedInputValue}
          placeholder='Search'
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}

export default Serch
