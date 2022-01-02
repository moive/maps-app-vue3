import { MutationTree } from 'vuex';
import { PlacesStateInterface } from './state';


const mutations: MutationTree<PlacesStateInterface> = {
    someMutation(){
        console.log(111)
    }
}

export default mutations;