function initialize() {
    var mapProp = {
        zoom: 12,
        center: new google.maps.LatLng(53.5845498, -2.407250799999929),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize); ;marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(53.5845498,-2.407250799999929)});infowindow = new google.maps.InfoWindow({content:'<strong>Generations Bolton</strong><br>Ainsworth Lane<br> Bolton<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);
