import { Routes, Route } from 'react-router-dom'
import styles from './Router.module.scss'
import './styles/index.scss'
import Main from './pages/Main/main'
import Favorite from 'pages/Favorite/favorite'
import Nav from 'components/Nav/nav'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
        <Nav />
      </div>
    </div>
  )
}

export default App
