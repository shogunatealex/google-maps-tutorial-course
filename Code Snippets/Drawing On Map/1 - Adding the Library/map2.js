var map;
var markerArray = []
function initMap() {
  var mapOptions;
  var center = {lat: 34.752746, lng: 135.416201};
  var zoom =  18;
  $.get("./styles.json",function(res){
      mapOptions =  {
        center: center,
        zoom: zoom,
        styles: res
      }
  }).fail(function(){
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

          tempMarker.addListener('click', function(){
            var contentString = "<div class='infobox-containter'>" +
              "<p> " + this.description +"</p>" +
              "</div>";
            tempInfoBox.setContent(contentString);
            tempInfoBox.open(map, this);
          })


          markerArray.push(tempMarker);
        }) // end for

        // var clusterStyles = [
        //   {
        //     url: './img/clusterimg/m1.png',
        //     textColor: 'white',
        //     height: 64,
        //     width: 64,
        //   },
        //   {
        //     url: './img/clusterimg/m2.png',
        //     textColor: 'white',
        //     height: 64,
        //     width: 64,
        //   },
        //   {
        //     url: './img/clusterimg/m3.png',
        //     textColor: 'white',
        //     height: 64,
        //     width: 64,
        //   }
        // ]
        //
        // var clusterOptions = {
        //   styles: clusterStyles
        // }
        //
        // var markerCluster = new MarkerClusterer(map, markerArray,
        //   clusterOptions);
        $('.shopping-btn').click(function(){
          $.each(markerArray, function(index,marker){
            if(marker.category == "shopping"){
              if(marker.getMap() == null){
                marker.setMap(map);
              }
              else{
                marker.setMap(null)
              }
            }// end if
          }) // end each
        })// end click
        $('.religion-btn').click(function(){
          $.each(markerArray, function(index,marker){
            if(marker.category == "religion"){
              if(marker.getMap() == null){
                marker.setMap(map);
              }
              else{
                marker.setMap(null)
              }
            }// end if
          }) // end each
        })// end click
        $('.park-btn').click(function(){
          $.each(markerArray, function(index,marker){
            if(marker.category == "park"){
              if(marker.getMap() == null){
                marker.setMap(map);
              }
              else{
                marker.setMap(null)
              }
            }// end if
          }) // end each
        })// end click
        var hyogoCoor = [
{lat: 34.726941, lng: 134.320221},
{lat: 34.739356, lng: 134.311981},
{lat: 34.754025, lng: 134.314728},
{lat: 34.766435, lng: 134.331207},
{lat: 34.77546, lng: 134.327087},
{lat: 34.776588, lng: 134.316101},
{lat: 34.800272, lng: 134.316101},
{lat: 34.813803, lng: 134.302368},
{lat: 34.830714, lng: 134.281769},
{lat: 34.826205, lng: 134.259796},
{lat: 34.835223, lng: 134.258423},
{lat: 34.845367, lng: 134.266663},
{lat: 34.851002, lng: 134.25293},
{lat: 34.867905, lng: 134.25705},
{lat: 34.874665, lng: 134.266663},
{lat: 34.882551, lng: 134.261169},
{lat: 34.897195, lng: 134.290009},
{lat: 34.912962, lng: 134.294128},
{lat: 34.921971, lng: 134.281769},
{lat: 34.935482, lng: 134.269409},
{lat: 34.938859, lng: 134.251556},
{lat: 34.951242, lng: 134.258423},
{lat: 34.961372, lng: 134.274902},
{lat: 34.976002, lng: 134.277649},
{lat: 34.978252, lng: 134.265289},
{lat: 34.994004, lng: 134.288635},
{lat: 35.003003, lng: 134.265289},
{lat: 35.01875, lng: 134.266663},
{lat: 35.03337, lng: 134.283142},
{lat: 35.042365, lng: 134.316101},
{lat: 35.059229, lng: 134.311981},
{lat: 35.070469, lng: 134.324341},
{lat: 35.082832, lng: 134.322968},
{lat: 35.094069, lng: 134.350433},
{lat: 35.113169, lng: 134.355927},
{lat: 35.133387, lng: 134.362793},
{lat: 35.147986, lng: 134.366913},
{lat: 35.1536, lng: 134.388885},
{lat: 35.146863, lng: 134.403992},
{lat: 35.156968, lng: 134.412231},
{lat: 35.167073, lng: 134.406738},
{lat: 35.185033, lng: 134.410858},
{lat: 35.194012, lng: 134.382019},
{lat: 35.217576, lng: 134.376526},
{lat: 35.229916, lng: 134.403992},
{lat: 35.242254, lng: 134.403992},
{lat: 35.228794, lng: 134.430084},
{lat: 35.23889, lng: 134.450684},
{lat: 35.236646, lng: 134.464417},
{lat: 35.252348, lng: 134.480896},
{lat: 35.268047, lng: 134.496002},
{lat: 35.278137, lng: 134.516602},
{lat: 35.297194, lng: 134.508362},
{lat: 35.314005, lng: 134.511108},
{lat: 35.328571, lng: 134.501495},
{lat: 35.352096, lng: 134.513855},
{lat: 35.366656, lng: 134.498749},
{lat: 35.375614, lng: 134.471283},
{lat: 35.411438, lng: 134.482269},
{lat: 35.431582, lng: 134.475403},
{lat: 35.441652, lng: 134.44519},
{lat: 35.469618, lng: 134.432831},
{lat: 35.49422, lng: 134.428711},
{lat: 35.508754, lng: 134.425964},
{lat: 35.517697, lng: 134.412231},
{lat: 35.562395, lng: 134.425964},
{lat: 35.564629, lng: 134.403992},
{lat: 35.594786, lng: 134.403992},
{lat: 35.616, lng: 134.360046},
{lat: 35.663991, lng: 134.390259},
{lat: 35.696341, lng: 134.651184},
{lat: 35.69411, lng: 134.822845},
{lat: 35.688533, lng: 134.869537},
{lat: 35.650601, lng: 134.865417},
{lat: 35.638325, lng: 134.866791},
{lat: 35.623815, lng: 134.876404},
{lat: 35.591436, lng: 134.858551},
{lat: 35.573566, lng: 134.872284},
{lat: 35.560161, lng: 134.894257},
{lat: 35.545636, lng: 134.913483},
{lat: 35.514343, lng: 134.925842},
{lat: 35.513225, lng: 134.961548},
{lat: 35.528873, lng: 134.979401},
{lat: 35.534461, lng: 135.00824},
{lat: 35.540049, lng: 135.028839},
{lat: 35.532226, lng: 135.045319},
{lat: 35.506518, lng: 135.042572},
{lat: 35.497574, lng: 135.031586},
{lat: 35.486393, lng: 135.045319},
{lat: 35.477447, lng: 135.035706},
{lat: 35.464026, lng: 135.046692},
{lat: 35.447246, lng: 135.049438},
{lat: 35.405842, lng: 135.050812},
{lat: 35.410319, lng: 135.034332},
{lat: 35.382332, lng: 134.99588},
{lat: 35.401364, lng: 134.972534},
{lat: 35.410319, lng: 134.956055},
{lat: 35.412557, lng: 134.938202},
{lat: 35.391289, lng: 134.924469},
{lat: 35.372255, lng: 134.925842},
{lat: 35.359936, lng: 134.921722},
{lat: 35.346495, lng: 134.921722},
{lat: 35.336414, lng: 134.925842},
{lat: 35.314005, lng: 134.920349},
{lat: 35.302798, lng: 134.943695},
{lat: 35.29271, lng: 134.986267},
{lat: 35.289348, lng: 135.00412},
{lat: 35.281501, lng: 135.017853},
{lat: 35.270289, lng: 135.00824},
{lat: 35.263562, lng: 135.035706},
{lat: 35.263562, lng: 135.057678},
{lat: 35.23889, lng: 135.065918},
{lat: 35.259077, lng: 135.09613},
{lat: 35.266926, lng: 135.115356},
{lat: 35.263562, lng: 135.140076},
{lat: 35.255712, lng: 135.167542},
{lat: 35.240011, lng: 135.164795},
{lat: 35.227672, lng: 135.155182},
{lat: 35.215332, lng: 135.178528},
{lat: 35.197378, lng: 135.2005},
{lat: 35.191767, lng: 135.186768},
{lat: 35.179421, lng: 135.186768},
{lat: 35.167073, lng: 135.199127},
{lat: 35.162582, lng: 135.218353},
{lat: 35.176053, lng: 135.233459},
{lat: 35.177176, lng: 135.256805},
{lat: 35.172686, lng: 135.278778},
{lat: 35.164828, lng: 135.292511},
{lat: 35.1536, lng: 135.278778},
{lat: 35.143494, lng: 135.282898},
{lat: 35.14574, lng: 135.324097},
{lat: 35.1536, lng: 135.339203},
{lat: 35.137879, lng: 135.341949},
{lat: 35.135633, lng: 135.369415},
{lat: 35.124402, lng: 135.390015},
{lat: 35.101934, lng: 135.384521},
{lat: 35.088451, lng: 135.402374},
{lat: 35.074965, lng: 135.390015},
{lat: 35.050235, lng: 135.373535},
{lat: 35.047987, lng: 135.348816},
{lat: 35.042365, lng: 135.33371},
{lat: 35.027747, lng: 135.340576},
{lat: 35.024374, lng: 135.352936},
{lat: 35.006378, lng: 135.352936},
{lat: 34.980502, lng: 135.355682},
{lat: 34.96925, lng: 135.346069},
{lat: 34.95687, lng: 135.359802},
{lat: 34.948991, lng: 135.377655},
{lat: 34.952368, lng: 135.387268},
{lat: 34.944488, lng: 135.395508},
{lat: 34.939985, lng: 135.413361},
{lat: 34.93323, lng: 135.41748},
{lat: 34.937171, lng: 135.435333},
{lat: 34.931542, lng: 135.452499},
{lat: 34.927038, lng: 135.468979},
{lat: 34.918593, lng: 135.462799},
{lat: 34.921408, lng: 135.438766},
{lat: 34.91071, lng: 135.422287},
{lat: 34.894942, lng: 135.432587},
{lat: 34.898322, lng: 135.445633},
{lat: 34.853819, lng: 135.42984},
{lat: 34.853256, lng: 135.415421},
{lat: 34.838041, lng: 135.425034},
{lat: 34.822259, lng: 135.418167},
{lat: 34.81183, lng: 135.417137},
{lat: 34.80281, lng: 135.424347},
{lat: 34.793506, lng: 135.43808},
{lat: 34.785047, lng: 135.445633},
{lat: 34.76982, lng: 135.445633},
{lat: 34.76023, lng: 135.455933},
{lat: 34.747255, lng: 135.457306},
{lat: 34.733149, lng: 135.460739},
{lat: 34.732584, lng: 135.445633},
{lat: 34.715653, lng: 135.449066},
{lat: 34.703235, lng: 135.415421},
{lat: 34.686299, lng: 135.399628},
{lat: 34.222023, lng: 134.925842},
{lat: 34.179998, lng: 134.767914},
{lat: 34.184542, lng: 134.68483},
{lat: 34.270269, lng: 134.633331},
{lat: 34.70888, lng: 134.354553},
]

var hyogo = new google.maps.Polygon({
          paths: hyogoCoor,
          strokeColor: '#FFFFFF',
          strokeOpacity: 1,
          strokeWeight: 1,
          fillColor: '#FFFFFF',
          fillOpacity: .1
        });
        hyogo.setMap(map);

        var drawingManager = new google.maps.drawing.DrawingManager();
        drawingManager.setMap(map);


      })// end get

  });
}
