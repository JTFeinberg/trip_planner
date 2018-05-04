
let addMarker = function() {
    const fullStackNode = document.createElement('div');
    fullStackNode.style.width = "32px";
    fullStackNode.style.height = "39px";
    fullStackNode.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    
    new mapboxgl.Marker(fullStackNode)
        .setLngLat([-74.009, 40.705])
        .addTo(map);
}

module.exports = addMarker;