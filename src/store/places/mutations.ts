import { MutationTree } from 'vuex';
import { PlacesStateInterface } from './state';


const mutations: MutationTree<PlacesStateInterface> = {
    setLngLat(state: PlacesStateInterface, {lng, lat}:{lng: number, lat: number}){
        // console.log({coords})
        console.log(lng, lat)
        state.userLocation = [lng, lat];
        state.isLoading = false;
    }
}

export default mutations;