let iAngle = 0;
let iDistance = 0;
let direction = 1;
let radarColor = '#00ff00';

function setup() {
    let canvas = createCanvas(1200, 700);
    canvas.parent(document.body);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    stroke(radarColor);
    strokeWeight(2);

    let centerX = width / 2;
    let centerY = height / 2;

    // Simuler un point radar
    let x = centerX + cos(iAngle) * iDistance;
    let y = centerY + sin(iAngle) * iDistance;
    point(x, y);

    // Avancer l'angle
    iAngle += direction;
    if (iAngle > 360) iAngle = 0;

    // Simuler une distance aléatoire
    iDistance = random(50, 300);
}

// Changer couleur du radar
document.getElementById('radarColor').addEventListener('input', (e) => {
    radarColor = e.target.value;
});

// Bouton Bluetooth (simulé)
document.getElementById('bluetoothBtn').addEventListener('click', () => {
    alert("Connexion Bluetooth en développement...");
});
