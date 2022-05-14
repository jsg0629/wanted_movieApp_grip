import React from 'react'
import style from './Serch.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil'
import { searchValue } from 'hooks/atoms'

const Serch = (): JSX.Element => {
  const [InputValue, setInputValue] = useRecoilState(searchValue)
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value)
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
          value={InputValue}
          placeholder='Search'
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}

export default Serch
