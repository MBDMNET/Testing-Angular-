import { obtenerRobots } from './arrays';
describe('pruebas de arrays',()=>{
    it('debe de devolver almenos 3 robot y que devuelve a MegaMan y Jarvi',()=>{
        const resp = obtenerRobots();
        expect(resp.length).toBeGreaterThanOrEqual(3);// sea mayor o igual a 3
        expect(resp).toContain('MegaMan');
        expect(resp).toContain('Jarvis');
       
       })
})