import { atom } from 'recoil'
import { IFavoriteMovieData } from 'types/movies.d'

export const favoriteMovieData = atom<IFavoriteMovieData>({
  key: 'favoriteMovieData',
  default: {
    Movies: [],
  },
})
