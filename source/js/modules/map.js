const ymaps = window.ymaps;
const pinCoords = [59.937465, 30.322623];
const mapContainer = document.querySelector('#map');

export const initMap = () => {
  if (mapContainer) {
    ymaps.ready(init);
  }
};

function init() {
  const myMap = new ymaps.Map('map', {
    center: [59.938405, 30.323118],
    zoom: 16,
    controls: ['routeButtonControl', 'typeSelector', 'zoomControl'],
  }, {
    searchControlProvider: 'yandex#search',
  });

  const myPin = new ymaps.Placemark(pinCoords, {
    hintContent: 'Мы находимся здесь',
  }, {
    iconLayout: 'default#image',
    iconImageHref: './img/sprite/icon-address.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [-9, -22],
  });

  myMap.geoObjects.add(myPin);
}
