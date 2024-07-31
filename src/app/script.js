
    ymaps.ready(function () {
      var map = new ymaps.Map('map', 
        {
          center: [48.629368279268746,44.438365346240815],
          zoom: 17,
          controls: []
        }, 
      );
      var MyPlacemark = new ymaps.Placemark([48.629368279268746,44.438365346240815],{
        iconCaption: 'Volgashot',
      }, {
        preset: 'islands#circleIcon',
      });
      var myPolygon = new ymaps.Polygon([[
        [48.62905430981753,44.4387834207322],
        [48.6292174387763,44.4389155195262],
        [48.629243663818265,44.438914178421676],
        [48.62938164173999,44.438532369716945],
        [48.62949720924038,44.43862691758473],
        [48.629525212094634,44.43862557648021],
        [48.629567780792556,44.4385086569031],
        [48.62961578560845,44.43854821948608],
        [48.629642899419366,44.43854687838158],
        [48.62970218578498,44.438377723301315],
        [48.62933364891575,44.43807819103981],
        [48.62930564595456,44.43807752048753],
        [48.62905430981753,44.4387834207322]  
    ]]);
      map.controls.remove('geolocationControl');
      map.controls.remove('searchControl');
      map.controls.remove('trafficControl');
      map.controls.remove('typeSelector'); 
      map.controls.remove('fullscreenControl'); 
      map.controls.remove('zoomControl'); 
      map.controls.remove('rulerControl'); 
      map.geoObjects.add(MyPlacemark);
      map.geoObjects.add(myPolygon);
    });
