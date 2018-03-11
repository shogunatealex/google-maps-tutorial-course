var map;
function initMap() {
  $.get("./styles.json",function(res){
    map = new google.maps.Map($("#map")[0], {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8,
      styles: res
    });
  })
}
