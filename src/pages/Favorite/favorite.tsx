import React from 'react'
import style from './Favorite.module.scss'
import MovieList from 'components/Movie/movieList'

const Favorite = (): JSX.Element => {
  return (
    <div>
      <main className={style.favorite}>
        <h1>Favorite</h1>
        <section>
          <MovieList />
        </section>
      </main>
    </div>
  )
}

export default Favorite
