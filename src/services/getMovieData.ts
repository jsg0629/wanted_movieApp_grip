import axios from 'axios'

export const getMovieData = async (searchValue: string, page: number) => {
  let res
  try {
    res = await axios({
      method: 'GET',
      params: {
        apikey: process.env.REACT_APP_MOVIE_API_ID,
        s: searchValue,
        page,
      },
      url: process.env.REACT_APP_MOVIE_API_URL,
    })
  } catch {
    return null
  }
  return res?.data
}
