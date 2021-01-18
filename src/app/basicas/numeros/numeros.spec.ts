import { incrementar } from './numeros';
describe('pruebas de numero',() =>{
    it('debe devolver 100 si el numero que pasamos es mayor de 100',()=>{
        const resp = incrementar(101);
        expect(resp===100);
    });

    it('debe devolver el numero + 1 si el numero que pasamos es menor de 100',()=>{
        const numero =50;
        const resp = incrementar(numero);
        expect(resp).toBe(numero+1);
    });
});