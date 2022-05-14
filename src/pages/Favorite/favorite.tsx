import React from 'react'
import style from './Favorite.module.scss'
import MovieList from 'components/Movie/movieList'
import Nav from 'components/Nav/nav'

const Favorite = (): JSX.Element => {
  return (
    <div>
      <main className={style.favorite}>
        <h1>Favorite</h1>
        <section>
          <MovieList />
        </section>
        <Nav />
      </main>
    </div>
  )
}

export default Favorite
