var map = L.map('map').setView([48.8566, 2.3522], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var monuments = [
    { name: "Tour Eiffel", coords: [48.8584, 2.2945], image: "images/tour_eiffel.jpg", info: "La Tour Eiffel est une tour de fer puddlé de 324 mètres de hauteur." },
    { name: "Musée du Louvre", coords: [48.8606, 2.3376], image: "images/musee_du_louvre.jpg", info: "Le Musée du Louvre est le plus grand musée d'art et d'antiquités au monde." },
    { name: "Cathédrale Notre-Dame", coords: [48.8529, 2.3500], image: "images/notre_dame.jpg", info: "La Cathédrale Notre-Dame de Paris est une cathédrale gothique située sur l'île de la Cité." },
    { name: "Arc de Triomphe", coords: [48.8738, 2.2950], image: "images/arc_de_triomphe.jpg", info: "L'Arc de Triomphe est l'un des monuments les plus célèbres de Paris, situé à l'extrémité ouest des Champs-Élysées." },
    { name: "Basilique du Sacré-Cœur", coords: [48.8867, 2.3431], image: "images/sacre_coeur.jpg", info: "La Basilique du Sacré-Cœur est une église située au sommet de la butte Montmartre." },
    { name: "Palais de Versailles", coords: [48.8049, 2.1204], image: "images/palais_de_versailles.jpg", info: "Le Palais de Versailles est un château royal situé à Versailles, à l'ouest de Paris." },
    { name: "Panthéon", coords: [48.8462, 2.3460], image: "images/pantheon.jpg", info: "Le Panthéon est un monument situé dans le Quartier Latin de Paris." },
    { name: "Place de la Concorde", coords: [48.8656, 2.3211], image: "images/place_de_la_concorde.jpg", info: "La Place de la Concorde est l'une des places les plus célèbres de Paris, située à l'extrémité est des Champs-Élysées." }
];

monuments.forEach(function(monument) {
    var marker = L.marker(monument.coords).addTo(map);
    marker.on('click', function() {
        document.getElementById('monument-image').src = monument.image;
        document.getElementById('monument-info').innerText = monument.info;
    });
});
