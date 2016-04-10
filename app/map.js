var POIS = []

function myFunction(location, lat, lng) {
    return (confirm(location+". Is this the location you wanted?")==true);
}

function getPOIS(){
    return POIS;
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 3,
    styles: [{
      featureType: 'poi',
      stylers: [{ visibility: 'off' }]  // Turn off points of interest.
    }, {
      featureType: 'transit.station',
      stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
    }],
    disableDoubleClickZoom: true
  });
  map.addListener('click', function(e) {
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();
    var latlng = new google.maps.LatLng(lat, lng);
    var geocoder = geocoder = new google.maps.Geocoder();
    var save = false;
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
               if (myFunction(results[1].formatted_address, lat, lng)==true){
                    var marker = new google.maps.Marker({
                           position: {lat: lat, lng: lng},
                           map: map,
                        });
                    POIS.push(marker);
               }
            }
        }
    });
    });
}
