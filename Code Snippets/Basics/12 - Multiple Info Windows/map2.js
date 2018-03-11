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
      })// end get

  });
}
