
function first(array) {
  return array[0];
}

function last<ArrayType>(array: ArrayType[]): ArrayType | undefined {
  return array[Array.length -1];
}

const pilots = [ "piloto 1", "piloto 2", "piloto 3", "piloto 4", "piloto 5"];

const firstPilot = first(pilots);

const lastPilot = last(pilots);


//////////////////////////////////////////////////////////////////////////////////// 

