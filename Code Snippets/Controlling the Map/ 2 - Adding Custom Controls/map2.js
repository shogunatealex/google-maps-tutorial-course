var map;
var markerArray = []
function initMap() {
  var mapOptions;
  var center = {lat: 34.752746, lng: 135.416201};
  var zoom =  18;
  var mapStyle1;
  var mapStyle2;
  $.get("./styles.json",function(res){
    console.log(res);
      mapOptions =  {
        center: center,
        zoom: zoom,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          mapTypeIds: ['roadmap', 'terrain'],
          position: google.maps.ControlPosition.TOP_CENTER
        },
        styles: res.style1
      }
      mapStyle1 = new google.maps.StyledMapType(res.style1);
      mapStyle2 = new google.maps.StyledMapType(res.style2);

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
    if(mapStyle1){
      map.mapTypes.set('style-1', mapStyle1);
      map.setMapTypeId('style-1');
    }
    if(mapStyle2){
      map.mapTypes.set('style-2', mapStyle2);
    }

        // Create a div to hold the control.
    var controlDiv = document.createElement('div');

    // Set CSS for the control border
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to Toggle Style';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Toggle Style';
    controlUI.appendChild(controlText);

    map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(controlDiv);

    $(controlDiv).click(function(){
      if(map.getMapTypeId() == "style-1"){
        map.setMapTypeId('style-2');
      }
      else{
        map.setMapTypeId('style-1');
      }
    });



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
        $('.reset-btn').click(function(){
          if(currentPoly){
            currentPoly.setMap(null);
            currentPoly = null;
          }
          $.each(markerArray, function(index,marker){
            marker.setMap(map);
          }) // end each
        })// end click
        $('.toggle-draw-btn').click(function(){
          if(drawingManager.drawingMode == null){
            drawingManager.setOptions({
              drawingMode: google.maps.drawing.OverlayType.POLYGON
            });
          }
          else{
            drawingManager.setOptions({
              drawingMode: null
            })
          }
        })// end click

        var drawingManager = new google.maps.drawing.DrawingManager({
          drawingControl: false
        });
        drawingManager.setMap(map);
        var currentPoly;
        google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event){
          if(currentPoly){
            currentPoly.setMap(null);
          }
          currentPoly = event.overlay;
          currentPoly = event.overlay;

          drawingManager.setOptions({
            drawingMode: null
          })

          $.each(markerArray, function(index,marker){
            if(google.maps.geometry.poly.containsLocation(marker.position, currentPoly)){
              marker.setMap(map);
            }
            else{
              marker.setMap(null);
            }
          })
        })


      })// end get

  });
}
