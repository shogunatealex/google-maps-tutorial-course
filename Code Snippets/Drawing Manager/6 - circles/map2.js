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

        google.maps.event.addListener(drawingManager, 'circlecomplete', function(circle){
          console.log(circle.getRadius());
          google.maps.event.addListener(circle, 'radius_changed', function(){
            console.log('radius changed');
          })
          google.maps.event.addListener(circle, 'center_changed', function(){
            console.log('center changed');
          })
        })
        var circle = new google.maps.Circle({
          center: {lat: 34.753799388433904, lng: 135.41466141202545},
          radius: 100,
          fillColor: "#FFF",
          fillOpacity: .5,
          strokeWeight: 5,
          strokeColor: "#000",
          strokeOpacity: 1,
          map: map,
          editable: true,
          draggable: true
        })

        google.maps.event.addListener(circle, 'radius_changed', function(){
          console.log('radius changed');
        })
        google.maps.event.addListener(circle, 'center_changed', function(){
          console.log('center changed');
        })


  });
})
}
