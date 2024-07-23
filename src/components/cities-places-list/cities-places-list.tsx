import PlaceCard from '../place-card/place-card';

type CitiesPlacesListProps = {
  maxPlaceCards: number;
}

function CitiesPlacesList({maxPlaceCards}: CitiesPlacesListProps): JSX.Element {

  return(
    <div className="cities__places-list places__list tabs__content">
      {
        Array
          .from({length: maxPlaceCards})
          .map(() => <PlaceCard key={Math.random()} />)
      }
    </div>
  );
}

export default CitiesPlacesList;
