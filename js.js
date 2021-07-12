let map;

function Procurar() {
    var idlat1 = document.getElementById("IdLat1").value;
    var idlat = idlat1 * (-1);
    var idlong1 = document.getElementById("IdLong1").value;
    var idlong = idlong1 * (-1);
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -idlat, lng: -idlong },
        zoom: 13,
        mapId: '9f038ac5eea0df4d'
    });
}