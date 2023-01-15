
const details = document.getElementById("details");
details.addEventListener('click', getDetails);

function getDetails() {
    const latitude = data.latitude;
    const longitude = data.longitude;
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: latitude, lng: longitude },
        zoom: 8
    });
    const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map
    });
}

