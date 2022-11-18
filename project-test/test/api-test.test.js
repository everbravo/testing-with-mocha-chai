/*import { expect, assert } from "@open-wc/testing";
import * as obj from "../src/unitTest/funciones";

describe('Testeo de api datos',  () => {
    let f =  obj.getData(4);
    it('debe retornar un arreglo con datos', function() {
        return obj.getData(4).
          then(res => assert.equal(res, 42));
      });
    it("debe retornar un arreglo con datos", () => {
        console.log("fdsadf ", f);
      assert.typeOf(f, "String", "No se retorno los valore esperados");
    });

    let res1 = [
        { link: 'https://pokeapi.co/api/v2/pokemon/5/' },
        { link: 'https://pokeapi.co/api/v2/pokemon/6/' },
        { link: 'https://pokeapi.co/api/v2/pokemon/7/' },
        { link: 'https://pokeapi.co/api/v2/pokemon/8/' }
      ];
    it('works', function(done) {
        this.timeout(6000);
        obj.getData(4).
          then(res => {
            assert.equal(res, res1);
            // `done()` with no parameters means the test succeeded
            done();
          }).
          // If you pass a parameter to `done()`, Mocha considers that an error
          catch(err => done(err));
      });
});*/