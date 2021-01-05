fuction initMap() {
    const loc={ lat: 34.059132, lng: -118.303719};

    const map = new google.maps.Map (docment.querySelector('.map'), {
        Zoom: 14,
        Center:loc
    });
    const marker = new google.maps.Marker({position:loc, map:map});
}

