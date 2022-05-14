import React from 'react'
import style from './Movies.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Movie = ({ Title, Year, Poster }: { Title: string; Year: string; Poster: string }) => {
  return (
    <li className={style.movies}>
      <img src={`${Poster}`} alt='posterImg' />
      <div className={style.movieTitle}>{Title}</div>
      <div className={style.movieReleaseYear}>{Year}</div>
      <button type='button'>
        <FontAwesomeIcon className={style.addFavoriteBtn} icon={faStar} />
      </button>
    </li>
  )
}

export default Movie
