import { Jugador } from './clase';
xdescribe ('pruebas de clase',()=>{
    let jugador = new Jugador();
    //beforeAll() antes que todas
    //beforeEach(); antes que cada una de las pruebas

    //afterAll(); despues de todas las pruebas
    //afterEach() despues de cada una de las pruebas

    beforeAll(()=>{
        //console.log('beforeAll')
    }) 
    beforeEach(()=>{
        //console.log('beforeEach')
        jugador = new Jugador();
    }); 
    
    afterAll(()=>{
        //console.log('afterAll')
    }); 
    afterEach(()=>{
       //console.log('afterEach') 
    }) 
    it('Debe devolver 80 de ho si recibe 20 de daño',()=>{
        //const jugador = new Jugador();
        const resp = jugador.recibeDanio(20);
        expect(resp).toBe(80);
    })
    it('Debe devolver 50 de ho si recibe 50 de daño',()=>{
        console.log('esta prueba va a fallar');
        const resp = jugador.recibeDanio(50);
        expect(resp).toBe(50);
    })

    it('Debe devolver 0 de ho si recibe mas de 100 de daño',()=>{
       
        const resp = jugador.recibeDanio(101);
        expect(resp).toBe(0);
    })
})
