# wanted_movieApp_grid
원티드에서 진행한 첫번째 기업과제 그립의 영화앱 기업과제 입니다.

## 개발환경 
### 파일구조

<pre><code>
├── README.md
├── package.json
├── src
│   ├── Router.module.scss
│   ├── components
│   │   ├── Movie
│   │   │   ├── Movies.module.scss
│   │   │   └── movie.tsx
│   │   └── Nav
│   │       ├── Nav.module.scss
│   │       └── nav.tsx
│   ├── hooks
│   │   └── atoms
│   │       ├── favoriteMovieData.ts
│   │       ├── index.ts
│   │       └── searchValue.ts
│   ├── index.tsx
│   ├── logo.svg
│   ├── pages
│   │   ├── Favorite
│   │   │   ├── Favorite.module.scss
│   │   │   ├── FavoriteList
│   │   │   │   ├── FavoriteMovieList.module.scss
│   │   │   │   └── favoriteMovieList.tsx
│   │   │   ├── FavoriteMovie
│   │   │   │   ├── FavoriteMovie.module.scss
│   │   │   │   └── favoriteMovie.tsx
│   │   │   └── favorite.tsx
│   │   └── Main
│   │       ├── Main.module.scss
│   │       ├── MovieList
│   │       │   ├── ErrorMessage.module.scss
│   │       │   ├── MovieList.module.scss
│   │       │   ├── errorMessage.tsx
│   │       │   └── movieList.tsx
│   │       ├── SerchInput
│   │       │   ├── Serch.module.scss
│   │       │   └── serch.tsx
│   │       └── main.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── router.tsx
│   ├── services
│   │   ├── dummy.js
│   │   └── getMovieData.ts
│   ├── setupTests.ts
│   ├── styles
│   │   ├── base
│   │   │   ├── _fonts.scss
│   │   │   ├── _more.scss
│   │   │   └── _reset.scss
│   │   ├── constants
│   │   │   ├── _colors.scss
│   │   │   ├── _levels.scss
│   │   │   └── _sizes.scss
│   │   ├── index.js
│   │   ├── index.scss
│   │   └── mixins
│   │       ├── _animation.scss
│   │       ├── _flexbox.scss
│   │       ├── _position.scss
│   │       ├── _responsive.scss
│   │       └── _visual.scss
│   └── types
│       └── movies.d.ts
├── tsconfig.json
└── yarn.lock
</code></pre>

### 라이브러리 
리액트 v18, classnames, router v6, recoil, store.js, 

### 실행 

env 파일 생성 > yarn install, yarn start

## 기능

### Main Page 영화 검색
![검색결과](https://user-images.githubusercontent.com/93072844/168468633-086170cd-a1cb-4344-ae10-7aa7a2c16641.gif)


### Main Page 무한 스크롤 
![loding2](https://user-images.githubusercontent.com/93072844/168468529-5f1defbf-7c74-4e97-b0c1-24812a54f91b.gif)

### Main Page Error 처리
![error](https://user-images.githubusercontent.com/93072844/168468561-5353a0a8-63c5-468c-9ac9-491daaae4e0e.gif)

### Main Page에서 즐겨찾기 추가 Favorite Page에서 렌더링 
![즐겨찾기](https://user-images.githubusercontent.com/93072844/168468731-8c74d921-f59d-4490-a44b-c7f2285a834f.gif)

### Favorite Page에서 즐겨찾기 제거
![즐겨찾기2](https://user-images.githubusercontent.com/93072844/168468793-793aa6bf-db84-48dd-8a91-50539b477fcd.gif)


