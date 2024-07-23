import CitiesPlacesList from '../cities-places-list/cities-places-list';
import CitiesPlacesSort from '../cities-places-sort/cities-places-sort';
import { City, SortType } from '../const';

type PlaceCardProps = {
  maxPlaceCards: number;
  placesCount: number;
  city: City;
};

function CitiesPlacesSection({
  maxPlaceCards,
  placesCount,
  city
}: PlaceCardProps): JSX.Element {

  return(
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{placesCount} places to stay in {city}</b>
      <CitiesPlacesSort currentSortType={SortType.Popular} />
      <CitiesPlacesList maxPlaceCards={maxPlaceCards} />
    </section>
  );
}

export default CitiesPlacesSection;
