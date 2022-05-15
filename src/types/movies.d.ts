export declare interface IMovie {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}
export declare interface IMovieList {
  Response: string
  Search?: IMovie[]
  totalResults?: number
  Error?: string
}

export declare interface IFavoriteMovieData {
  Movies: IMovie[]
}

export declare interface ErrorProps {
  isLoading: boolean
  message?: string | undefined
}
