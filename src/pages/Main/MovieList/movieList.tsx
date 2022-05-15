import React, { useEffect, useState, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import style from './MovieList.module.scss'
import Movie from 'components/Movie/movie'
import { getMovieData } from 'services/getMovieData'
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
      setPage(1) // 새로 검색시 다시 페이지 state 초기화
      SetLoadingState(false)
    }
    setTimeout(() => fetchData(), 1000)
  }, [searchValueState, setData])

  useUnmount(() => {
    // 컴포넌트 Un mount되면 초기화
    setsearchValue('')
  })

  /* 무한 스크롤 로직 */
  const [page, setPage] = useState(1)
  const [ref, inView] = useInView()

  const getItems = useCallback(async () => {
    SetLoadingState(true)
    setTimeout(async () => {
      const result = await getMovieData(searchValueState, page).then((res) => res)
      setData(result)
      SetLoadingState(false)
    }, 500)
  }, [page])

  useEffect(() => {
    getItems()
  }, [getItems])

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !isLoading) {
      setPage((prevState) => prevState + 1)
    }
  }, [inView, isLoading])
  if (isLoading) return <ErrorMessage isLoading={isLoading} />
  if (data?.Response === 'False' || !data) return <ErrorMessage isLoading={isLoading} message={data?.Error} />
  return (
    <div className={style.movieListWrraper}>
      <ul>
        {data.Search?.map((el) => (
          <Movie key={el.imdbID} Title={el.Title} Year={el.Year} Poster={el.Poster} imdbID={el.imdbID} Type={el.Type} />
        ))}
      </ul>
      <span ref={ref} />
    </div>
  )
}

export default MovieList
