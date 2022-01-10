import { defineComponent, onMounted, ref, watch } from 'vue';
import { usePlacesStore } from '@/composables';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

export default defineComponent({
    name:'MapView',
    setup(){


        const mapElement = ref<HTMLDivElement>();

        const {isLoading, userLocation, isUserLocationReady} = usePlacesStore();

        onMounted(()=>{
            // console.log(mapElement.value)
            if(isUserLocationReady.value){
                return initMap();
            }
            console.log('No location map yet')
        });


        watch(isUserLocationReady, ()=>{
            if(isUserLocationReady.value) initMap();
        });

        const initMap = async ()=>{
            if(!mapElement.value) throw new Error('Div Element not exits');
            if(!userLocation.value) throw new Error('User location not exits');

            await Promise.resolve(); // fix to display the map correctly

            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15 // starting zoom
            });

            const myLocationMarker = new mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .addTo(map)
        };

        return {
            isLoading,
            userLocation,
            isUserLocationReady,
            mapElement
        }
    }
})