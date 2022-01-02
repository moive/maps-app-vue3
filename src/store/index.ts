import { createStore } from 'vuex';

export interface StateInterface {
  example:unknown
}

export default createStore<StateInterface>({
  modules: {
    example: {}
  }
})
