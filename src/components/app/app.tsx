import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  mainPageCardsCount: number;
}

function App({mainPageCardsCount}: AppProps) {

  return(
    <MainPage mainPageCardsCount = {mainPageCardsCount} />
  );
}

export default App;
