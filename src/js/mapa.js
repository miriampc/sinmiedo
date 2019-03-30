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

// Create a marker icon from an image URL:
var icon = new H.map.Icon('./img/lugar.png');

// Create a marker using the previously instantiated icon:
var marker = new H.map.Marker({ lat: -12.145349, lng: -77.021752 }, { icon: icon });

// Add the marker to the map:
map.addObject(marker);

