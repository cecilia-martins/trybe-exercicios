type PlanetSituation = 'situação 1' | 'situação 2' | 'situação 3' | 'situação 4';

type Coordinates = [ number, number, number, number ];

type Planet = {
  name: string
  coordinatesPlanets: Coordinates
  situation: PlanetSituation
  satelites: string
}

const planets: Planet[] 


