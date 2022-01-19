import { Module } from 'vuex';
import { StateInterface } from '..';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import state, { MapStateInterface } from './state';



const mapModule: Module<MapStateInterface, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default mapModule;