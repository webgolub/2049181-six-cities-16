import { SortType } from '../const';
import SortOptionItem from '../sort-option-item/sort-option-item';

type CitiesPlacesSortProps = {
  currentSortType: SortType;
}

function CitiesPlacesSort({currentSortType}: CitiesPlacesSortProps): JSX.Element {

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {
          Object.values(SortType).map((sortType) => <SortOptionItem sortType={sortType} isActive={sortType === currentSortType} key={sortType} />)
        }
      </ul>
    </form>
  );
}

export default CitiesPlacesSort;
