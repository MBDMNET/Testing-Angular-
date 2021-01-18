import { usuarioIngresado } from "./booleanos";

describe('pruebas de booleanos',()=>{
    it('debe devolver un true',()=>{
        const resp = usuarioIngresado();
        expect(resp).not.toBeTruthy();
        expect(resp).toBeFalsy();
       
    })
})