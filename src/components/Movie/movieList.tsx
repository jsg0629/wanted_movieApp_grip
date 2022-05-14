import React from 'react'
import style from './MovieList.module.scss'
import Movies from './movies'

const MovieList = (): JSX.Element => {
  return (
    <div className={style.movieListWrraper}>
      <Movies />
    </div>
  )
}

export default MovieList
