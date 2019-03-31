var platform = new window.H.service.Platform({
    'app_id': '0cn4L91h4l6CiSDvePoy',
    'app_code': '6_4qcIzz_nhV9T2UYRzD3Q'
});

var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.normal.map,
    {
        zoom: 15,
        center: { lat: -12.145349, lng: -77.021752 }
    }
);
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude, position.coords.longitude)
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.map.setCenter(pos);
    });
  }

console.log('location',navigator.geolocation)
// Create a marker icon from an image URL:
var icon = new H.map.Icon('./img/lugar.png');

// Create a marker using the previously instantiated icon:
var marker = new H.map.Marker({ lat: -12.140349, lng: -77.021752 }, { icon: icon });
var marker1 = new H.map.Marker({ lat: -12.14912, lng: -77.019999 }, { icon: icon });
var marker2 = new H.map.Marker({ lat: -12.145029, lng: -77.020802 }, { icon: icon });
var marker3 = new H.map.Marker({ lat: -12.145934, lng: -77.019652 }, { icon: icon });
// Add the marker to the map:
map.addObject(marker);
map.addObject(marker1);
map.addObject(marker2);
map.addObject(marker3);

