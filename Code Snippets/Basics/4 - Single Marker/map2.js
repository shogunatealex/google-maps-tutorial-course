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

    var myLatLng = {lat: 34.754313, lng: 135.414278};
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Tsukaguchi Supermarket',
      animation: google.maps.Animation.BOUNCE
    });
    marker.setAnimation(google.maps.Animation.DROP);
  });
}
