import { SortType } from '../const';

type SortOptionItemProps = {
  sortType: SortType;
  isActive: boolean;
}

function SortOptionItem({sortType, isActive}: SortOptionItemProps): JSX.Element {

  return(
    <li className={`places__option ${
      isActive
        ? 'places__option--active'
        : ''
    }`}
    tabIndex={0}
    >
      {sortType}
    </li>
  );
}

export default SortOptionItem;
