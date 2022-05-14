import React from 'react'
import styles from './Main.module.scss'
import userImg from '../../assets/image.avif'
import SerchInput from '../../components/SerchInput/serch'
import MovieList from '../../components/Movie/movieList'

const Main = (): JSX.Element => {
  return (
    <div>
      <main className={styles.main}>
        <header className={styles.profileWrraper}>
          <div className={styles.userName}>
            <strong>Hello</strong> GUEST1123!
          </div>
          <div className={styles.subTitle}>Book your favorite movie</div>
          <img className={styles.userImg} src={userImg} alt='userImg' />
        </header>
        <SerchInput />
        <section>
          <h1>
            <strong>Search</strong> Results
          </h1>
          <MovieList />
        </section>
      </main>
    </div>
  )
}

export default Main
