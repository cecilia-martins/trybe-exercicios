function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, " foi enviada em uma miss\u00E3o"));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert('Reduz esse trem aê');
    }
    else if (spaceship.speed < targetSpeed) {
        alert('Amentando esse trem');
    }
    else {
        alert('Mantenha esse trem :)');
    }
}
var spaceshipName = prompt('Insira o nome da nave');
var spaceshipCaptain = prompt('Insira o nome do capitão');
var currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
var speed = Number(prompt('Insira a velocidade'));
accelerate(speed, currentShip);
