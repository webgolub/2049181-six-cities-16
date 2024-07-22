import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import { AppRoute } from '../const';

type AppProps = {
  mainPageCardsCount: number;
}

function App({mainPageCardsCount}: AppProps) {

  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage mainPageCardsCount={mainPageCardsCount}/>} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Favorites} element={<FavoritesPage />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
