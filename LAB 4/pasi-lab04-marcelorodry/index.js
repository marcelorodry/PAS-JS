// requisição à url https://swapi.dev/api/planets/?page=2
let p = fetch("https://swapi.dev/api/planets/?page=2")
  .then(response => response.json())
  .then((data) => console.log("Lista de Planetas: ", data.results))
  .catch((e) =>console.log(e))
  .catch(error => {
    console.error(error); // Trate o erro aqui, se necessário
  });

  const obj = {
    "results": [
      {
        "name": "Tatooine",
        "climate": "arid"
      },
      {
        "name": "Hoth",
        "climate": "frozen"
      },
      {
        "name": "Dagobah",
        "climate": "murky"
      }
    ]
  };
  
  const planetasFrozen = obj.results.filter(planeta => planeta.climate === "frozen");
  
  console.log(planetasFrozen);
  fetch("https://swapi.dev/api/planets/?page=2")
  .then(response => response.json())
  .then((data) => console.log("Lista de Planetas: ", data.results))
  .catch((e) =>console.log(e))

  const result = {
  "results": [
    {
      "name": "Tatooine",
      "climate": "arid"
    },
    {
      "name": "Hoth",
      "climate": "frozen"
    },
    {
      "name": "Endor",
      "climate": "temperate"
    },
    {
      "name": "Dagobah",
      "climate": "murky"
    }
  ]
};

const isTemperate = planeta => planeta.climate === "temperate";
const climasTemperate = result.results.map(isTemperate);

console.log(climasTemperate);

const contar = {
    "results": [
      {
        "name": "Tatooine",
        "climate": "arid"
      },
      {
        "name": "Hoth",
        "climate": "frozen"
      },
      {
        "name": "Endor",
        "climate": "temperate"
      },
      {
        "name": "Dagobah",
        "climate": "murky"
      },
      {
        "name": "Alderaan",
        "climate": "temperate"
      }
    ]
  };
  
  const contarTemperate = (contador, planeta) => planeta.climate === "temperate" ? contador + 1 : contador;
  const totalTemperate = contar.results.reduce(contarTemperate, 0);
  
  console.log(totalTemperate);


  //requisição à url https://swapi.dev/api/people/?page=2 
  const url = "https://swapi.dev/api/people/?page=2";

async function obterListaPessoas() {
  const response = await fetch(url);
  const json = await response.json();
  return json.results;
}

async function filtrarPessoas() {
  const pessoas = await obterListaPessoas();

  const pessoasComPeleVerde = pessoas.filter(pessoa => pessoa.skin_color === "green");
  console.log(pessoasComPeleVerde);

  const pessoaComMassaMaiorQueCem = pessoas.find(pessoa => parseFloat(pessoa.mass) > 100);
  console.log(pessoaComMassaMaiorQueCem);

  const pessoasComAlturaMaiorOuIgual177 = pessoas.reduce((total, pessoa) => {
    if (parseFloat(pessoa.height) >= 177) {
      return total + 1;
    } else {
      return total;
    }
  }, 0);
  console.log(pessoasComAlturaMaiorOuIgual177);

  const nomesPessoas = pessoas.map(pessoa => pessoa.name);
  console.log(nomesPessoas);
}

filtrarPessoas();
