var mymap = L.map('map').setView([-0.5388, 37.4596], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
	maxZoom: 18
}).addTo(mymap);

var marker = L.marker([-0.5388, 37.4596]).addTo(mymap);
marker.bindPopup("<b>Embu County.!!!</b><br>County number 14.").openPopup();