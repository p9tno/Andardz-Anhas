//Дождёмся загрузки API и готовности DOM.
ymaps.ready(initMap);

function initMap() {
    // let result = document.getElementById('result'), // для отладки

    let x = $('#map').attr('data-x');
    let y = $('#map').attr('data-y');

    destinations = {
        'coordinates': [x,y]
    },

    myMap = new ymaps.Map('map', {
        center: destinations['coordinates'],
        zoom: 16
    });


    let windowWidth = $(this).innerWidth();
    let mediaQuerySize = 767;
    let imgSize = [77, 112];
    let imgOfSize = [-60, -40];

    let imgSizeSm = [38, 56];
    let imgOfSizeSm = [-20, -40];

    if (windowWidth <= mediaQuerySize) {
        imgSize = imgSizeSm;
        imgOfSize = imgOfSizeSm;
    } else {
        // console.log('lg');
    }

    let placemark = new ymaps.Placemark(destinations[['coordinates']], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../../img/loc.svg',
        iconImageSize: imgSize,
        iconImageOffset: imgOfSize,
    });

    myMap.geoObjects.add(placemark);

    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    //myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

}
