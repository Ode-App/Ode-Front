const marker1 = {
    coordinates: {
        latitude: 41.387010,
        longitude: 2.170047
    },
    title: 'Prueba',
    destination: false    
}

const marker2 = {
    coordinates: {
        latitude: 41.3887901,
        longitude: 2.1589899
    },
    title: 'Prueba2',
    destination: false    
}

const marker3 = {

    coordinates: {
        latitude: 41.38535,
        longitude: 2.1589899
    },
    title: 'Prueba3',
    destination: false    
}


export function getMarkers(coordinates, title, destination) {
    var markers = [];
    //getGroupCoordinates
    markers.push({coordinates, title, destination });
    markers.push(marker1);
    markers.push(marker2);
    markers.push(marker3);
    return markers;
} 

