import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import CitiesPlacesSection from '../../components/cities-places-section/cities-places-section';
import CitiesMap from '../../components/cities-map/cities-map';
import { City } from '../../components/const';

type MainPageProps = {
    maxPlaceCards: number;
}

function MainPage({maxPlaceCards}: MainPageProps): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six Cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <CitiesPlacesSection
              maxPlaceCards={maxPlaceCards}
              placesCount={404}
              city={City.Amsterdam}
            />
            <CitiesMap />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
