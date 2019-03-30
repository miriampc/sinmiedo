var platform = new H.service.Platform({
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
           center: { lat: -12.1453636, lng: -77.0241353 }
       });