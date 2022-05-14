import React from 'react'
import style from './Favorite.module.scss'
import FavoriteMovieList from './FavoriteList/favoriteMovieList'

const Favorite = (): JSX.Element => {
  return (
    <div>
      <main className={style.favorite}>
        <h1>Favorite</h1>
        <section>
          <FavoriteMovieList />
        </section>
      </main>
    </div>
  )
}

export default Favorite
