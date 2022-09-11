function sendSpaceship(name:string, captain:string) {
  const spaceship = {
    name,
    captain,
    speed: 20,
    inMission: true,
    crew:[]
  }

  alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão`);

  return spaceship;
}

function accelerate(targetSpeed:number, spaceship: { name:string, speed: number }) {
  if (spaceship.speed > targetSpeed) {
    alert('Reduz esse trem aê')
  } else if (spaceship.speed < targetSpeed) {
    alert('Amentando esse trem')
  } else {
    alert('Mantenha esse trem :)')
  }
}

const spaceshipName = prompt('Insira o nome da nave');
const spaceshipCaptain = prompt('Insira o nome do capitão');

const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);

const speed = Number(prompt('Insira a velocidade'));

accelerate(speed, currentShip);

