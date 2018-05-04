const mapboxgl = require("mapbox-gl");

const backgroundP = {
    activity: 'http://i.imgur.com/WbMOfMl.png',
    hotel: 'http://i.imgur.com/D9574Cu.png',
    restaurant: 'http://i.imgur.com/cqR6pUI.png'
}

let addMarker = function(typeP, coord) {
    const nodeNew = document.createElement('div');
    nodeNew.style.width = "32px";
    nodeNew.style.height = "39px";
    nodeNew.style.backgroundImage = `url(${backgroundP[typeP]})`;
    
    // new mapboxgl.Marker(fullStackNode)
    //     .setLngLat([-74.009, 40.705])
    //     .addTo(map);

    return new mapboxgl.Marker(nodeNew).setLngLat(coord);
}

module.exports = {addMarker};