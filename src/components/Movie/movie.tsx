import React, { useState, useEffect } from 'react'
import style from './Movies.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { favoriteMovieData } from 'hooks/atoms'
import { useRecoilState } from 'recoil'
import cx from 'classnames'
import store from 'store'

const Movie = ({
  Title,
  Year,
  Poster,
  imdbID,
  Type,
}: {
  Title: string
  Year: string
  Poster: string
  imdbID: string
  Type: string
}) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [favoriteData, setFavoriteData] = useRecoilState(favoriteMovieData)

  const handleFavorite = () => {
    if (isFavorite) deleteFavorite()
    else addFavorite()
    setIsFavorite((prev) => !prev)
  }

  const addFavorite = () => {
    setFavoriteData((prevState) => {
      return {
        Movies: [...prevState.Movies, { Title, Year, Poster, imdbID, Type }],
      }
    })
  }
  const deleteFavorite = () => {
    setFavoriteData((prevState) => {
      return {
        Movies: prevState.Movies.filter((el) => el.imdbID !== imdbID),
      }
    })
  }
  useEffect(() => {
    let isFavoriteData = false
    favoriteData.Movies.forEach((el) => {
      if (el.imdbID === imdbID) isFavoriteData = true
    })
    if (isFavoriteData) setIsFavorite(true)
    else setIsFavorite(false)
  }, [favoriteData, imdbID])

  useEffect(() => {
    store.set('favoriteData', favoriteData)
  }, [favoriteData])

  return (
    <li className={style.movies}>
      <img src={`${Poster}`} alt='posterImg' />
      <div className={style.movieTitle}>{Title}</div>
      <div className={style.movieReleaseYear}>
        {Year}, {Type}
      </div>
      <button type='button' onClick={handleFavorite}>
        <FontAwesomeIcon className={cx(style.favoriteBtn, { [style.activeFavoriteBtn]: isFavorite })} icon={faStar} />
      </button>
    </li>
  )
}

export default Movie
