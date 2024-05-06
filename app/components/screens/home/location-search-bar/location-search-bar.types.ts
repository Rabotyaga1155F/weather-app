import {IFindLocation} from '../../../../types/find-location.types.ts';
import {ILocation} from '../../../../types/weaher-forecast.types.ts';

export interface ILocationSearchBarProps {
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  handleSearch: (searchString: string) => void;
  locations: ILocation[];
  handleFindLocation: (location: ILocation) => void;
}
