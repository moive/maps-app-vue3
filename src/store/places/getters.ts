import { GetterTree } from 'vuex';
import { StateInterface } from '..';
import { PlacesStateInterface } from './state';


const getters: GetterTree<PlacesStateInterface, StateInterface> = {
    isUserLocationReady(state){
        return !!state.userLocation;
    }
}

export default getters;