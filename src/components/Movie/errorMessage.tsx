import React from 'react'
import { ErrorProps } from 'types/movies'
import style from './ErrorMessage.module.scss'

const ErrorMessage = ({ isLoading, message }: ErrorProps): JSX.Element => {
  const getErrorMessage = (): string | undefined => {
    if (isLoading) return 'Loading...'
    if (message === 'Movie not found!' || message === 'Incorrect IMDb ID.') return 'No results'
    if (message === 'Too many results.') return 'Too many results'
    return message
  }
  return <div className={style.errorMessage}>{getErrorMessage()}</div>
}

export default ErrorMessage
