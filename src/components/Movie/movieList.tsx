import React from 'react'
import style from './MovieList.module.scss'
import Movie from './movie'
import dummyData from 'services/dummy'

const MovieList = (): JSX.Element => {
  return (
    <div className={style.movieListWrraper}>
      <ul>
        {dummyData.Search.map((el) => (
          <Movie key={el.imdbID} Title={el.Title} Year={el.Year} Poster={el.Poster} />
        ))}
      </ul>
    </div>
  )
}

export default MovieList
