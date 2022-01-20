import mapboxgl from 'mapbox-gl';
import { MutationTree } from 'vuex';
import { MapStateInterface } from './state';


const mutations: MutationTree<MapStateInterface> = {
    setMap(state, map:mapboxgl.Map){
        state.map = map;
    }
}

export default mutations;