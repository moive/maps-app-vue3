<template>
    <button
        v-if="isBtnReady"
        class="btn btn-primary"
        @click="onMyLocationClicked"
    >Go to my location</button>
</template>
<script lang="ts">
import { useMapStore, usePlacesStore } from '@/composables'
import { computed, defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const {userLocation, isUserLocationReady} = usePlacesStore();
        const { map, isMapReady } = useMapStore();
        return {
            isBtnReady: computed<boolean>(()=>isUserLocationReady.value && isMapReady.value),
            onMyLocationClicked: () => {
                map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 14
                });
            }
        }
    },
})
</script>

<style lang="scss" scoped>
    button{
        position:fixed;
        right: 30px;
        top: 30px;
    }
</style>