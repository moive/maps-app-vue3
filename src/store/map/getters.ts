import { GetterTree } from 'vuex';
import { StateInterface } from '..';
import { MapStateInterface } from './state';


const getters: GetterTree<MapStateInterface, StateInterface> = {
    isMapReady(state){
        return !!state.map;
    }
}

export default getters;