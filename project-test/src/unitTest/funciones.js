let ganador = "";

export function peleaPokemones(primerGolpe, pokemonesTotal) {
  //pokemon primario
  let primerPoke = primerGolpe.nombre;
  let vidaPrimerPoke = primerGolpe.vida;
  let ataquePrimerPoke = primerGolpe.ataque;

  //pokemon secundario
  let pokemonDos = pokemonesTotal.find(poke => poke.nombre !== primerPoke);
  let vidaPokemonDos = pokemonDos.vida;
  let ataquePokemonDos = pokemonDos.ataque;
  // console.log("primer golpe: ",primerGolpe, "ataque: ", ataquePrimerPoke)
  // console.log("segundo golpe: ",pokemonDos, "ataque: ", pokemonDos.ataque)

  while(true) {
    if (ataquePrimerPoke > vidaPokemonDos) {
      ganador = primerGolpe;
      break;
    } else {
      vidaPokemonDos - ataquePrimerPoke;
    }
    if (ataquePokemonDos > vidaPrimerPoke) {
      ganador = pokemonDos;
      break;
    } else {
      vidaPrimerPoke - ataquePokemonDos;
    }
  }
  return ganador;
}

export function _formatData(data, dataLCS) {
  let batt = dataLCS;
  let pokes = [];
  data["data"].forEach(poke => {
    let battG = 0;
    batt.forEach(elmt => {
      if (poke.name === elmt.nombre) {
        battG = elmt.battles;
      }
    });
    pokes.push({
      name: poke.name,
      img: poke.img,
      vida: poke.vida,
      ataque: poke.ataque,
      wons: battG
    });
  });
  return pokes;
}

// guardar informacion de pokemones ganadores al local storage
export function saveToLCS(data) {
  let key = "wons";
  let nombre = data.nombre;
  return this.verGetLocalData(key, nombre);
}

// Obtener los datos almacenados en el local storage
export function verGetLocalData(key, name) {
  let localSave = [];
  const item = localStorage.getItem(key);
  if (item !== null) {
    return findPokeData(name, JSON.parse(item));
  } else {
    localSave.push({ nombre: name, battles: 1 });
    localStorage.setItem(key, JSON.stringify(localSave));
    return "CREATED";
  }
}

// buscar un pokemon en los datos del local storage
export function findPokeData(nombre, data) {
  let value = undefined;
  let bool = false;
  data.forEach(element => {
    if (element.nombre === nombre) {
      element.battles += 1;
      bool = true;
    }
  });
  if (!bool) {
    data.push({ nombre: nombre, battles: 1 });
    value = true;
  }
  localStorage.setItem("wons", JSON.stringify(data));
  return value;
}

export const selectBattlesPokes = () => {
  let localSave = localStorage.getItem("wons");
  if (localSave !== null) {
    //console.log('LocalStorage: ', JSON.parse(localSave));
    return JSON.parse(localSave);
  }
  return [];
};

/*// nueva locura-------------
export async function getData(offset) {
  let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=4`;
//console.log("ss ", this.offset);
  await fetch(url) //le pasamos la url y el methodo
      .then((response) => {
          if (response.ok) {
              return response.json();
          }else{
              return Promise.reject(response);   
          }
      }).then((data) => {this._dataFormat(data.results)}).catch((error) => {console.warn("algo ha fallado", error); })
}

let wiki = [];
let dataFinal = [];
let character = [];

export async function _dataFormat(data) {
  let charac = [];
  data.forEach((characters) => {
    charac.push({
      link: characters.url
    })
  })
  wiki = charac; 
  await getDataPoke(wiki);
}

export async function getDataPoke(datal)  {
  await datal.forEach((index) => {
      fetch(index.link, {method: 'POST'})
      .then((response) => {
          if (response.ok) {
              return response.json();
          }else{
              return Promise.reject(response);   
          }
      }).then((data) => {this._dataFormat2(data)}).catch((error) => {console.warn("algo ha fallado", error); })
  });
}

export function _dataFormat2(data) {
   character.push({
     name: data.name,
     img: data.sprites.other.dream_world.front_default,
     ataque: data.stats[1].base_stat,
     vida: data.stats[0].base_stat
   })
   dataFinal = character;
   _validateData(dataFinal);
}

function _validateData(data){
  if(wiki.length <= data.length){
       _senData(this.dataFinal);
       this.character =[];
  }
}

export function _senData(data){
  //dataFinal =[];
  return data;
}
*/