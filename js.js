let map;

function Procurar() {
    var idlat = document.getElementById("IdLat").value;
    var idlong = document.getElementById("IdLong").value;
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -idlat, lng: -idlong },
        zoom: 8,
    });
}