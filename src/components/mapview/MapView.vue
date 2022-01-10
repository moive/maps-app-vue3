<template>
    <div
        v-if="!isUserLocationReady"
        class="loading-map d-flex justify-content-center align-items-center"
    >
        <div class="text-center">
            <h3>Wait a moment, please</h3>
            <p>Locating...</p>
        </div>
    </div>
    <div
        v-show="isUserLocationReady"
        class="map-container"
        ref="mapElement"
    ></div>
</template>

<script lang="ts" src="./MapView.ts" />

<style lang="scss" scoped>
    .loading-map{
        background-color: rgba(0,0,0,0.8);
        color:white;
        height: 100vh;
        left: 0;
        position: fixed;
        top:0;
        width: 100vw;
        z-index: 10;
    }
    .map-container{
        width: 100vw;
        height: 100vh;
        background-color: tomato;
    }
</style>