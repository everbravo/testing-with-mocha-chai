import { expect, assert } from "@open-wc/testing";
import * as obj from "../src/unitTest/funciones";

describe("Test de app PokeBatallas", () => {
  describe("Formateo de datos", () => {
    let data = {
      data: [
        {
          name: "bulbasaur",
          img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
          ataque: 49,
          vida: 45
        },
        {
          name: "ivysaur",
          img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
          ataque: 62,
          vida: 60
        },
        {
          name: "venusaur",
          img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
          ataque: 82,
          vida: 80
        },
        {
          name: "charmander",
          img:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
          ataque: 52,
          vida: 39
        }
      ]
    };

    let dataLCS = [
      {
        nombre: "ivysaur",
        battles: 2
      },
      {
        nombre: "charizard",
        battles: 1
      },
      {
        nombre: "venusaur",
        battles: 2
      },
      {
        nombre: "bulbasaur",
        battles: 1
      }
    ];

    it("Debe retornar un arreglo", () => {
      //expect(obj._formatData(data, dataLCS)).to.be.array();
      assert.typeOf(
        obj._formatData(data, dataLCS),
        "Array",
        "No es del tipo array"
      );
    });

    it("Debe retornar un arreglo con tamaño de cuatro (4)", () => {
      //expect(obj._formatData(data, dataLCS)).to.be.ofSize(4);
      assert.lengthOf(
        obj._formatData(data, dataLCS),
        4,
        "No coincide el numero de elementos en su interior"
      );
    });
  });

  describe("Pelea de pokemones", () => {
    let primerGolpe = {
      nombre: "bulbasaur",
      img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      ataque: 49,
      vida: 45
    };
    let pkmonTotal = [
      {
        nombre: "bulbasaur",
        img:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        ataque: 49,
        vida: 45
      },
      {
        name: "ivysaur",
        img:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
        ataque: 62,
        vida: 60
      }
    ];

    it("Debe retornar un valor de tipo Object", () => {
      assert.typeOf(
        obj.peleaPokemones(primerGolpe, pkmonTotal),
        "Object",
        "No coincide el tipo de dato retornado"
      );
    });

    it("El object retornado debe contener el nombre del ganador", () => {
      expect(obj.peleaPokemones(primerGolpe, pkmonTotal)).to.have.property(
        "name"
      );
    });
  });

  describe("Test de almacenamiento en el Local Storage", () => {
    let info = { nombre: "bulbasaur" };
    let lcs = [{ nombre: "bulbasaur", battles: 1 }];

    it("Almacenar datos en el local storage", () => {
      expect(obj.saveToLCS(info)).to.be.equals("CREATED");
    });

    it("Verificar la existencia de datos pertenecientes a un pokemon", () => {
      expect(obj.verGetLocalData("wons", info)).to.be.equals(true);
    });

    it("Buscar y agregar los datos de un pokemon en el LCS y si existe agregarle valor", () => {
      expect(obj.findPokeData("bulbasaur", lcs)).to.be.equals(undefined);
    });

    it("Buscar y almacenar los datos de un pokemon que no existe en el LCS", () => {
      expect(obj.findPokeData("iviasaur", lcs)).to.be.equals(true);
    });

    it("Obtner los datos almacenados en el LocalStorage - Existen datos", () => {
      assert.typeOf(
        obj.selectBattlesPokes(),
        "Array",
        "No coincide el tipo de dato retornado"
      );
    });

    it("Obtner los datos almacenados en el LocalStorage - No existan datos", () => {
      expect(obj.selectBattlesPokes()).not.be.equals([]);
    });

  });
});

  