function init() {
    let map = new ymaps.Map( 'map__yandex', {
        center: [55, 55],
        zoom: 7,
        controls: []
      });
}
ymaps.ready(init)