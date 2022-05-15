import { useState } from 'react'
import style from './FavoriteMovieList.module.scss'
import { IFavoriteMovieData } from 'types/movies'
import store from 'store'
import FavoriteMovie from '../FavoriteMovie/favoriteMovie'

const FavoriteMovieList = (): JSX.Element => {
  const useStateHook = useState(store.get('favoriteData'))
  const favoriteData: IFavoriteMovieData | null = useStateHook[0]
  const updateFavoriteData = useStateHook[1]

  if (!favoriteData || favoriteData.Movies.length === 0)
    return <div className={style.errorMessage}>doesn&apos;t exist</div>
  return (
    <div className={style.favoriteMovieListWrraper}>
      <ul>
        {favoriteData?.Movies.map((el) => (
          <FavoriteMovie
            key={el.imdbID}
            Title={el.Title}
            Year={el.Year}
            Poster={el.Poster}
            imdbID={el.imdbID}
            Type={el.Type}
            updateFavoriteData={updateFavoriteData}
          />
        ))}
      </ul>
    </div>
  )
}

export default FavoriteMovieList
