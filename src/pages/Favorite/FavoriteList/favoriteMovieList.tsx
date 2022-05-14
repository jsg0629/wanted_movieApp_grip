import React, { useEffect, useState } from 'react'
import style from './FavoriteMovieList.module.scss'
import Movie from '../../../components/Movie/movie'
import { useRecoilState } from 'recoil'

const FavoriteMovieList = (): JSX.Element => {
  return (
    <div className={style.favoriteMovieListWrraper}>
      <ul>
        {/* {data.Search?.map((el) => (
          <Movie key={el.imdbID} Title={el.Title} Year={el.Year} Poster={el.Poster} />
        ))} */}
      </ul>
    </div>
  )
}

export default FavoriteMovieList
