import React from 'react'
import styles from './Main.module.scss'
import userImg from '../../assets/image.avif'
import SerchInput from '../../components/SerchInput/serch'
import MovieList from '../../components/Movie/movieList'
import Nav from '../../components/Nav/nav'

const Main = (): JSX.Element => {
  return (
    <div>
      <main className={styles.main}>
        <header className={styles.profileWrraper}>
          <h1 className={styles.userName}>
            <strong>Hello</strong> GUEST1123!
          </h1>
          <div className={styles.subTitle}>Book your favorite movie</div>
          <img className={styles.userImg} src={userImg} alt='userImg' />
        </header>
        <SerchInput />
        <section>
          <h2>
            <strong>Search</strong> Results
          </h2>
          <MovieList />
        </section>
        <Nav />
      </main>
    </div>
  )
}

export default Main
