var map = new maplibregl.Map({
  container: "map",
  style: "https://api.maptiler.com/maps/streets/style.json?key=yP6QHdPTvI6ChKCrmE2F	",
  center: [77.4126, 23.2599],
  zoom: 4
});

map.on("load", function () {
  //inserting custom marker
  map.loadImage(
    'https://maplibre.org/maplibre-gl-js/docs/assets/custom_marker.png',
    function (error, image) {
      if (error) throw error;
      map.addImage('custom-marker', image);
    }
  );

  //adding places
  map.addSource("places", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description: "<a href='./index.html' style='text-decoration:none; border:none;'><p style='border:none; color: black; font-size:x-large; font-family:josefin sans; text-align:center; margin-right:10px;margin-left:10px;'>Mumbai</p></a>",
          },
          geometry: {
            type: "Point",
            coordinates: [72.880020, 19.116980],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<a href='./index.html' style='text-decoration:none; border:none;'><p style='border:none; color: black; font-size:x-large; font-family:josefin sans; text-align:center; margin-right:10px;margin-left:10px;'>Bhopal</p></a>",
          },
          geometry: {
            type: "Point",
            coordinates: [77.4126, 23.2599],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<a href='./index.html' style='text-decoration:none; border:none;'><p style='border:none; color: black; font-size:x-large; font-family:josefin sans; text-align:center; margin-right:10px;margin-left:10px;'>Indore</p></a>",
          },
          geometry: {
            type: "Point",
            coordinates: [75.8577, 22.7196],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<a href='./index.html' style='text-decoration:none; border:none;'><p style='border:none; color: black; font-size:x-large; font-family:josefin sans; text-align:center; margin-right:10px;margin-left:10px;'>Delhi</p></a>",
          },
          geometry: {
            type: "Point",
            coordinates: [77.1025, 28.7041],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<a href='./index.html' style='text-decoration:none; border:none;'><p style='border:none; color: black; font-size:x-large; font-family:josefin sans; text-align:center; margin-right:10px;margin-left:10px;'>Raipur</p></a>",
          },
          geometry: {
            type: "Point",
            coordinates: [81.6296, 21.2514],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<a href='./index.html' style='text-decoration:none; border:none;'><p style='border:none; color: black; font-size:x-large; font-family:josefin sans; text-align:center; margin-right:10px;margin-left:10px;'>Vadodara</p></a>",
          },
          geometry: {
            type: "Point",
            coordinates: [73.1812, 22.3072],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<a href='./index.html' style='text-decoration:none; border:none;'><p style='border:none; color: black; font-size:x-large; font-family:josefin sans; text-align:center; margin-right:10px;margin-left:10px;'>Dehradun</p></a>",
          },
          geometry: {
            type: "Point",
            coordinates: [78.0322, 30.3165],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<a href='./index.html' style='text-decoration:none; border:none;'><p style='border:none; color: black; font-size:x-large; font-family:josefin sans; text-align:center; margin-right:10px;margin-left:10px;'>Kolkata</p></a>",
          },
          geometry: {
            type: "Point",
            coordinates: [88.3639, 22.5726],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<a href='./index.html' style='text-decoration:none; border:none;'><p style='border:none; color: black; font-size:x-large; font-family:josefin sans; text-align:center; margin-right:10px;margin-left:10px;'>Ahemdabad</p></a>",
          },
          geometry: {
            type: "Point",
            coordinates: [72.5714, 23.0225],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<a href='./index.html' style='text-decoration:none; border:none;'><p style='border:none; color: black; font-size:x-large; font-family:josefin sans; text-align:center; margin-right:10px;margin-left:10px;'>Aurangabad</p></a>",
          },
          geometry: {
            type: "Point",
            coordinates: [75.3433, 19.8762],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<a href='./index.html' style='text-decoration:none; border:none;'><p style='border:none; color: black; font-size:x-large; font-family:josefin sans; text-align:center; margin-right:10px;margin-left:10px;'>Chennai</p></a>",
          },
          geometry: {
            type: "Point",
            coordinates: [80.2707, 13.0827],
          },
        },
      ],
    },
  });

  //layers
  map.addLayer({
    id: "places",
    type: "symbol",
    source: "places",
    layout: {
      "icon-image": "custom-marker",
      "icon-overlap": "always",
    },
  });

  // Create a popup, but don't add it to the map yet.
  var popup = new maplibregl.Popup({
    closeButton: true,
    closeOnClick: true,
  });

  map.on("mouseenter", "places", function (e) {
    map.getCanvas().style.cursor = "pointer";

    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });
});
