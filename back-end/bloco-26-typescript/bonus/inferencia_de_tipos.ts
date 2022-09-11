const spaceship = {
  name: 'string', // atribuindo o tipo string, sem dizer que é string
  speed: 0 // att o tipo number sem dizer que é number
};

function accelerate(spaceshipt:{ name: string; speed: number }, speed: number) {
  spaceship.speed = speed;
};

accelerate(spaceship, 50);