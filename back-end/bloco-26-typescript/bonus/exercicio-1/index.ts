
// const spaceship = {
//   name: 'string',
//   pilot: 'tbm string',
//   crewLimit: 0,
//   crew: [],
//   inMission: true
// }

// const saveSpaceship = (spaceship: {name: string, pilot: string, crewLimit: number, crew: string[], inMission: boolean}): string => {
//    return `Uma função que recebe o nome: ${spaceship.name}, o piloto: ${spaceship.pilot}, e mais esses trem aí...`
// };

const spaceships: any = [];

function addSpaceship(name:string, pilot:string, crewLimit: number) {
  const spaceship = {
  name,
  pilot,
  crewLimit,
  crew: [],
  inMission: false
  }
  spaceships.push(spaceship);

  alert('funfanfo AAAAAAAAAAAAAAAAAAAAAAAAADD')
};

function findSpaceship(name:string) {
  let spaceship: {
    name: string,
    pilot: string,
    crewLimit: string,
    crew: string[],
    inMission: boolean
  }

  spaceship = spaceships.find(ship => ship.name === name);

  return spaceship
}







