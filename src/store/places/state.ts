export interface PlacesStateInterface {
    isLoading: boolean;
    userLocation?: [number, number];
}

function state(): PlacesStateInterface {
    return {
        isLoading: true,
        userLocation: undefined,
    }
}

export default state;