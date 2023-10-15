var map = new maplibregl.Map({
  container: "map",
  style:
    "https://api.maptiler.com/maps/streets/style.json?key=yP6QHdPTvI6ChKCrmE2F	",
  center: [72.88002, 19.11698],
  zoom: 4,
  pitch: 40,
  bearing: 20,
});

map.on("load", function () {
  //inserting custom marker
  map.loadImage(
    "https://maplibre.org/maplibre-gl-js/docs/assets/custom_marker.png",
    function (error, image) {
      if (error) throw error;
      map.addImage("custom-marker", image);
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
            description:
              "<p style='color: black; font-size:15px; font-family:josefin sans; text-align:center;'> Marol Maroshi Road, Andheri East, Mumbai, Maharashtra </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [72.88002, 19.11698],
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
    closeButton: false,
    closeOnClick: false,
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

  map.on("mouseleave", "places", () => {
    map.getCanvas().style.cursor = "";
    popup.remove();
  });
});
