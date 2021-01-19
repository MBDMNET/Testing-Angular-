import { IncrementadorComponent } from './incrementador.component';


describe('Incrementador Component Unitarias',()=>{
    let component:IncrementadorComponent;
    beforeEach(()=>{
            component = new IncrementadorComponent();
    });

    it('no debe de pasar de 100 el progreso',()=>{
        component.progreso = 50;
        component.cambiarValor(5);

        expect(component.progreso).toBe(55);

        
    });
});