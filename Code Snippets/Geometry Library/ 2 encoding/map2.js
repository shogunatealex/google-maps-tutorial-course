var map;
var markerArray = []
function initMap() {
  var mapOptions;
  var center = {lat: 34.752746, lng: 135.416201};
  var zoom =  18;
  $.get("./styles.json",function(res){
    console.log(res);
      mapOptions =  {
        center: center,
        zoom: zoom,
        styles: res.style1
      }
  }).fail(function(x,y,z){
    console.log(x);
    console.log(y);
    console.log(z);
    mapOptions =  {
      center: center,
      zoom: zoom
    };
  }).always(function(){
    map = new google.maps.Map($("#map")[0], mapOptions);
    var tempInfoBox = new google.maps.InfoWindow({maxWidth: 100});
    $.get("./markers.json",function(markRes){
        $.each(markRes, function(index, marker){
          var position = marker.position;
          var title = marker.title;
          var category = marker.category;
          var placementMap = map;
          var description = marker.description;

          var imageUrls = {
            shopping: "./img/online-store.png",
            religion: "./img/torii.png",
            park: "./img/park.png"
          }

          var image =
          {
              url: imageUrls[category],
              scaledSize: new google.maps.Size(60, 60),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(30, 0)
          }


          var tempMarker = new google.maps.Marker({
            position: position,
            title: title,
            map: placementMap,
            category: category,
            icon: image,
            description: description
          });
          var listener1 = tempMarker.addListener('click', function(){
            var contentString = "<div class='infobox-containter'>" +
              "<p> " + this.description +"</p>" +
              "</div>";
            tempInfoBox.setContent(contentString);
            tempInfoBox.open(map, this);
            map.panTo(this.getPosition());
          })
          markerArray.push(tempMarker);
        }) // end for

        console.log(google.maps.drawing);
        var imageDraw =
        {
            url: "./img/online-store.png",
            scaledSize: new google.maps.Size(60, 60),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(30, 0)
        }

        var drawingManager = new google.maps.drawing.DrawingManager({
          circleOptions: {
            fillColor: "#FFF",
            fillOpacity: .5,
            strokeWeight: 5,
            strokeColor: "#000",
            strokeOpacity: 1,
            editable: true,
            draggable: true,
            clickable: false
          },
          rectangleOptions:{
            strokeWeight: 5,
            strokeColor: "#FFF",
            strokeOpacity: 1,
            fillOpacity: 1,
            fillColor: "#abc"
          },
          polylineOptions: {
            strokeWeight: 5,
            strokeColor: "#FFF",
            strokeOpacity: 1,
            editable: true
          },
          polygonOptions: {
            strokeWeight: 5,
            strokeColor: "#FFF",
            strokeOpacity: 1,
            fillOpacity: 1,
            fillColor: "#abc"
          }

        })
        drawingManager.setMap(map);

        var polyline = new google.maps.Polyline({
          path: [
{lat: 36.389229, lng: 137.587967},
{lat: 36.393099, lng: 137.576294},
{lat: 36.389229, lng: 137.567711},
{lat: 36.390611, lng: 137.539558},
{lat: 36.398073, lng: 137.532692},
{lat: 36.403323, lng: 137.528915},
{lat: 36.407192, lng: 137.518616},
{lat: 36.42515, lng: 137.510719},
{lat: 36.423493, lng: 137.469177},
{lat: 36.410231, lng: 137.460594},
{lat: 36.414928, lng: 137.444115},
{lat: 36.425703, lng: 137.404633},
{lat: 36.436475, lng: 137.396393},
{lat: 36.458845, lng: 137.391586},
{lat: 36.449732, lng: 137.362747},
{lat: 36.44338, lng: 137.357597},
{lat: 36.43758, lng: 137.359657},
{lat: 36.432608, lng: 137.334251},
{lat: 36.425426, lng: 137.319145},
{lat: 36.42515, lng: 137.312279},
{lat: 36.435371, lng: 137.305069},
{lat: 36.442552, lng: 137.313309},
{lat: 36.452494, lng: 137.316399},
{lat: 36.460502, lng: 137.316399},
{lat: 36.461054, lng: 137.246704},
{lat: 36.430122, lng: 137.208252},
{lat: 36.454427, lng: 137.183533},
{lat: 36.454427, lng: 137.150574},
{lat: 36.392546, lng: 137.090149},
{lat: 36.368222, lng: 137.059937},
{lat: 36.321764, lng: 137.04895},
{lat: 36.312912, lng: 137.021484},
{lat: 36.290777, lng: 137.007751},
{lat: 36.273065, lng: 136.958313},
{lat: 36.308486, lng: 136.958313},
{lat: 36.332828, lng: 136.950073},
{lat: 36.352739, lng: 136.919861},
{lat: 36.359928, lng: 136.907158},
{lat: 36.350527, lng: 136.894112},
{lat: 36.341678, lng: 136.883125},
{lat: 36.344789, lng: 136.878533},
{lat: 36.342681, lng: 136.874843},
{lat: 36.343268, lng: 136.874113},
{lat: 36.344893, lng: 136.874843},
{lat: 36.346414, lng: 136.876388},
{lat: 36.350078, lng: 136.875486},
{lat: 36.348972, lng: 136.870294},
{lat: 36.351771, lng: 136.869307},
{lat: 36.353327, lng: 136.871238},
{lat: 36.35305, lng: 136.873212},
{lat: 36.355677, lng: 136.876302},
{lat: 36.358373, lng: 136.875916},
{lat: 36.360619, lng: 136.87613},
{lat: 36.361138, lng: 136.872869},
{lat: 36.363418, lng: 136.872869},
{lat: 36.364075, lng: 136.873684},
{lat: 36.366563, lng: 136.873384},
{lat: 36.367565, lng: 136.871195},
{lat: 36.36563, lng: 136.868148},
{lat: 36.36411, lng: 136.868706},
{lat: 36.360239, lng: 136.867676},
{lat: 36.357163, lng: 136.865659},
{lat: 36.354709, lng: 136.864243},
{lat: 36.353085, lng: 136.864715},
{lat: 36.351426, lng: 136.866302},
{lat: 36.349144, lng: 136.862912},
{lat: 36.349386, lng: 136.858277},
{lat: 36.349732, lng: 136.855659},
{lat: 36.350527, lng: 136.84433},
{lat: 36.347485, lng: 136.835747},
{lat: 36.334211, lng: 136.8433},
{lat: 36.320934, lng: 136.836433},
{lat: 36.310975, lng: 136.831284},
{lat: 36.306272, lng: 136.831284},
{lat: 36.302122, lng: 136.82476},
{lat: 36.302122, lng: 136.808281},
{lat: 36.306549, lng: 136.804504},
{lat: 36.299908, lng: 136.791458},
{lat: 36.311529, lng: 136.788712},
{lat: 36.318998, lng: 136.789742},
{lat: 36.32536, lng: 136.789742},
{lat: 36.330339, lng: 136.784592},
{lat: 36.334764, lng: 136.786308},
{lat: 36.348315, lng: 136.785622},
{lat: 36.348591, lng: 136.793175},
{lat: 36.35661, lng: 136.808624},
{lat: 36.370433, lng: 136.801071},
{lat: 36.395862, lng: 136.796265},
{lat: 36.403323, lng: 136.793861},
{lat: 36.414376, lng: 136.777382},
{lat: 36.414376, lng: 136.770515},
{lat: 36.41631, lng: 136.770515},
{lat: 36.422111, lng: 136.770859},
{lat: 36.424598, lng: 136.768112},
{lat: 36.431227, lng: 136.769485},
{lat: 36.433437, lng: 136.773605},
{lat: 36.430951, lng: 136.778069},
{lat: 36.440895, lng: 136.789055},
{lat: 36.443933, lng: 136.797638},
{lat: 36.447523, lng: 136.790771},
{lat: 36.452494, lng: 136.788025},
{lat: 36.458569, lng: 136.792488},
{lat: 36.460502, lng: 136.797638},
{lat: 36.464644, lng: 136.795578},
{lat: 36.468785, lng: 136.797638},
{lat: 36.471546, lng: 136.794548},
{lat: 36.48176, lng: 136.800041},
{lat: 36.485625, lng: 136.803131},
{lat: 36.490041, lng: 136.802101},
{lat: 36.494182, lng: 136.794548},
{lat: 36.498045, lng: 136.794205},
{lat: 36.501909, lng: 136.796265},
{lat: 36.511568, lng: 136.794548},
{lat: 36.516535, lng: 136.798325},
{lat: 36.520673, lng: 136.800041},
{lat: 36.532812, lng: 136.808281},
{lat: 36.545501, lng: 136.815834},
{lat: 36.552396, lng: 136.815834},
{lat: 36.562049, lng: 136.808624},
{lat: 36.570321, lng: 136.800385},
{lat: 36.568666, lng: 136.790428},
{lat: 36.573905, lng: 136.791801},
{lat: 36.582452, lng: 136.794205},
{lat: 36.588517, lng: 136.794548},
{lat: 36.593203, lng: 136.788025},
{lat: 36.600921, lng: 136.788025},
{lat: 36.604504, lng: 136.790428},
{lat: 36.615528, lng: 136.783218},
{lat: 36.625448, lng: 136.783218},
{lat: 36.630131, lng: 136.784592},
{lat: 36.632887, lng: 136.795235},
{lat: 36.647212, lng: 136.800728},
{lat: 36.648864, lng: 136.808281},
{lat: 36.65217, lng: 136.809311},
{lat: 36.653547, lng: 136.806221},
{lat: 36.670071, lng: 136.82373},
{lat: 36.677506, lng: 136.820984},
{lat: 36.681636, lng: 136.820984},
{lat: 36.685766, lng: 136.816864},
{lat: 36.68494, lng: 136.811028},
{lat: 36.699806, lng: 136.815147},
{lat: 36.706412, lng: 136.806908},
{lat: 36.711642, lng: 136.796608},
{lat: 36.718797, lng: 136.789398},
{lat: 36.729804, lng: 136.796608},
{lat: 36.729529, lng: 136.809998},
{lat: 36.73118, lng: 136.820984},
{lat: 36.742186, lng: 136.822357},
{lat: 36.743286, lng: 136.832314},
{lat: 36.746037, lng: 136.840553},
{lat: 36.75704, lng: 136.84639},
{lat: 36.766667, lng: 136.85154},
{lat: 36.771617, lng: 136.849823},
{lat: 36.781242, lng: 136.843643},
{lat: 36.787841, lng: 136.85154},
{lat: 36.797189, lng: 136.85257},
{lat: 36.811209, lng: 136.847763},
{lat: 36.826325, lng: 136.858749},
{lat: 36.830997, lng: 136.859779},
{lat: 36.840065, lng: 136.857033},
{lat: 36.840889, lng: 136.862526},
{lat: 36.847483, lng: 136.862869},
{lat: 36.851054, lng: 136.867676},
{lat: 36.855725, lng: 136.860123},
{lat: 36.860669, lng: 136.864929},
{lat: 36.862592, lng: 136.870422},
{lat: 36.868635, lng: 136.877632},
{lat: 36.875227, lng: 136.882782},
{lat: 36.882367, lng: 136.883469},
{lat: 36.885937, lng: 136.886559},
{lat: 36.893351, lng: 136.877289},
{lat: 36.906254, lng: 136.879005},
{lat: 36.917235, lng: 136.889305},
{lat: 36.924097, lng: 136.896858},
{lat: 36.927939, lng: 136.909218},
{lat: 36.933977, lng: 136.919861},
{lat: 36.943581, lng: 136.926041},
{lat: 36.949617, lng: 136.928787},
{lat: 36.953184, lng: 136.944923},
{lat: 36.956751, lng: 136.95385},
{lat: 36.952087, lng: 136.954193},
{lat: 36.950715, lng: 136.961746},
{lat: 36.94413, lng: 136.974106},
{lat: 36.951264, lng: 136.981316},
{lat: 36.957848, lng: 136.984749},
{lat: 36.962786, lng: 136.984749},
{lat: 36.967175, lng: 136.987839},
{lat: 36.967449, lng: 136.994019},
{lat: 36.962512, lng: 137.002602},
{lat: 36.962512, lng: 137.014618},
{lat: 36.962512, lng: 137.027664},
{lat: 36.966352, lng: 137.036591},
{lat: 36.957848, lng: 137.056847},
{lat: 36.974033, lng: 137.175293},
{lat: 37.006939, lng: 137.493896},
{lat: 36.990214, lng: 137.627449},
{lat: 36.977324, lng: 137.635345},
{lat: 36.949343, lng: 137.666245},
{lat: 36.943307, lng: 137.70504},
{lat: 36.921077, lng: 137.715683},
{lat: 36.897194, lng: 137.713623},
{lat: 36.873304, lng: 137.733536},
{lat: 36.825226, lng: 137.735252},
{lat: 36.809285, lng: 137.749672},
{lat: 36.774917, lng: 137.749329},
{lat: 36.769417, lng: 137.762032},
{lat: 36.752914, lng: 137.753792},
{lat: 36.740535, lng: 137.757225},
{lat: 36.725402, lng: 137.748985},
{lat: 36.685766, lng: 137.754822},
{lat: 36.642253, lng: 137.757568},
{lat: 36.586312, lng: 137.743835},
{lat: 36.577765, lng: 137.69165},
{lat: 36.547983, lng: 137.686157},
{lat: 36.540812, lng: 137.71431},
{lat: 36.509912, lng: 137.70298},
{lat: 36.505497, lng: 137.677231},
{lat: 36.487557, lng: 137.655945},
],
map:map
})

        console.log(google.maps.geometry);
        var encodedPath = google.maps.geometry.encoding.encodePath(polyline.getPath());
        console.log(encodedPath);
        var recodedPath = google.maps.geometry.encoding.decodePath(encodedPath);
        console.log(recodedPath);
        var polygon = new google.maps.Polygon({
          paths: [recodedPath],
          map:map
        })
        google.maps.event.addListener(drawingManager, 'polygoncomplete', function(polygon){
          console.log(google.maps.geometry.poly.containsLocation(new google.maps.LatLng(34.754313,135.414278), polygon))
        })
  });
})
}
