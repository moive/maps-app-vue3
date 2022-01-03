import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PlacesStateInterface } from './state';


const actions: ActionTree<PlacesStateInterface, StateInterface> = {
    getInitialLocation({commit}){
        // todo: get loading
        navigator.geolocation.getCurrentPosition(
            ({coords: {longitude, latitude}}) => commit('setLngLat', {lng: longitude, lat: latitude}),
            (err)=>{
                console.error(err);
                throw new Error("No geolocation :(");
            }
        );
    }
}

export default actions;