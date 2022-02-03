//criando as funções pedidas
const wakeup = () => {
  return 'Acordando!!'
};

const breakfast = () => {
  return 'Bora tormar café!!'
};

const sleep = () => {
  return 'Partiu dormir!!'
};

// criando hof?
const doingThings = (funcao) => {
  console.log(funcao());

}

doingThings(breakfast);
