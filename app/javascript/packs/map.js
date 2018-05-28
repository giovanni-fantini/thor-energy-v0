import { mapCardContent } from "./map_card_content";

// This is the map
var map = new google.maps.Map(document.getElementById('map'), {
  styles: [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "hue": "#fff600"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f4f5f0"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#f4f5f0"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "hue": "#ff8500"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "8"
            },
            {
                "gamma": "2.06"
            },
            {
                "lightness": "-44"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "0"
            },
            {
                "lightness": "10"
            },
            {
                "weight": "1.00"
            },
            {
                "visibility": "on"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "hue": "#ffb600"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "0"
            },
            {
                "saturation": "-25"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#d9e8eb"
            },
            {
                "visibility": "on"
            }
        ]
    }
  ]
});


// This is an empty map-bounds object
const bounds = new google.maps.LatLngBounds();


// This iterates over each charging_station
JSON.parse(document.getElementById('map').dataset.markers).forEach((element) => {
  const marker = new google.maps.Marker({
    position: element["position"],
    map: map,
    title: element["title"]
  });

  // Adds coordinates of station to bounds
  bounds.extend(marker.position);

  // Creates charging_station show
  // const infoWindow = new google.maps.InfoWindow({
  //   content: element["info_window"]["content"]
  // });

  // Markers made clickable
  marker.addListener('click', (event) => {
    document.getElementById('map').insertAdjacentHTML("beforeend", `<div class="card">${mapCardContent(element)}</div>`)
  });
})


// Imposes bounds on map to achieve approriate centring and zoon
map.fitBounds(bounds)
