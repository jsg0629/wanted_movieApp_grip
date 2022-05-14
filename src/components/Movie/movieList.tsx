import React, { useEffect, useState } from 'react'
import style from './MovieList.module.scss'
import Movie from './movie'
import { getMovieData } from '../../services/getMovieData'
import { useRecoilState } from 'recoil'
import { searchValue } from 'hooks/atoms'
import { IMovieList } from 'types/movies'
import ErrorMessage from './errorMessage'
import { useUnmount } from 'react-use'

const MovieList = (): JSX.Element => {
  const defalutResult = { Response: 'False', Error: 'Incorrect IMDb ID.' }

  const [searchValueState, setsearchValue] = useRecoilState(searchValue)
  const useStateHook = useState(defalutResult)
  const data: IMovieList | null = useStateHook[0]
  const setData = useStateHook[1]
  const [isLoading, SetLoadingState] = useState(false)

  useEffect(() => {
    SetLoadingState(true)
    async function fetchData() {
      const result = await getMovieData(searchValueState, 1).then((res) => res)
      setData(result)
      SetLoadingState(false)
    }
    setTimeout(() => fetchData(), 1000)
  }, [searchValueState, setData])

  useUnmount(() => {
    setsearchValue('')
  })

  console.log(data)

  if (isLoading) return <ErrorMessage isLoading={isLoading} />
  if (data?.Response === 'False' || !data) return <ErrorMessage isLoading={isLoading} message={data.Error} />
  return (
    <div className={style.movieListWrraper}>
      <ul>
        {data.Search?.map((el) => (
          <Movie key={el.imdbID} Title={el.Title} Year={el.Year} Poster={el.Poster} />
        ))}
      </ul>
    </div>
  )
}

export default MovieList
