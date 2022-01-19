import Mapboxlg from 'mapbox-gl';

export interface MapStateInterface {
    map? : Mapboxlg.Map;
    markers: Mapboxlg.Marker[];
    distance?:number;
    duration?:number;
}

function state(): MapStateInterface {
    return {
        map: undefined,
        markers:[],
        distance:undefined,
        duration:undefined,
    }
}

export default state;