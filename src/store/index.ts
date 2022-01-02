import { createStore } from 'vuex';
import placesModule from './places';
import { PlacesStateInterface } from './places/state';

export interface StateInterface {
  places: PlacesStateInterface,
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule
  }
})
