import { Module } from 'vuex';
import { StateInterface } from '..';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import state, { PlacesStateInterface } from './state';



const placesModule: Module<PlacesStateInterface, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default placesModule;