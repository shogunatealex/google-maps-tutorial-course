var map;
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

    $.get("./markers.json",function(markRes){
        $.each(markRes, function(index, marker){
          var position = marker.position;
          var title = marker.title;
          var category = marker.category;
          var placementMap = map;

          var tempMarker = new google.maps.Marker({
            position: position,
            title: title,
            map: placementMap,
            category: category
          });

          console.log(tempMarker);
        })
    })
  });
}
