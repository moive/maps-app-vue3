import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoibW9pdmUiLCJhIjoiY2t5OTk2anU5MDQ0dTJ3azk4MWlpdXc0byJ9.WQXkDvSlGWC4TKXj-ivQ-Q';

if (!navigator.geolocation) {
    throw new Error('Your browser does not support geolocation');
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
