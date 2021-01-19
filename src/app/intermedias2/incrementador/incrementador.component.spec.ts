import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de Mostrar la Leyenda', () => {

          component.leyenda = "Progreso de Carga Nuevo";
          fixture.detectChanges(); //iniciar la deteccion de cambios
            //busca en todo el html el primer h3 que hay 
            //esto hace que hasta que no este 100 estable es decir el detectChange haya terminado 
            //no evalua lo siguiente
            fixture.whenStable().then(()=>{
                const elem:HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
                expect(elem.innerHTML).toContain( component.leyenda);
            })
          
    });

    it('debe mostrar en el input el valor del progreso',() =>{

        component.cambiarValor(5); 
        fixture.detectChanges();

        //esto hace que hasta que no este 100 estable es decir el detectChange haya terminado 
        //no evalua lo siguiente
        fixture.whenStable().then(()=>{
            const input = fixture.debugElement.query(By.css('input')).nativeElement;
            console.log(input);
            expect(input.value).toBe('55');
        });       

    })

    it('debe disminuir en 5 con un click en el boton',()=>{
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

        botones[0].triggerEventHandler('click',null);
        expect(component.progreso).toBe(45);

        botones[1].triggerEventHandler('click',null);
        expect(component.progreso).toBe(50);

    });

    it('debe aumentar en 5 con un click en el boton',()=>{
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

        botones[1].triggerEventHandler('click',null);
        expect(component.progreso).toBe(55);

    });

   
    it('al pinchar en el boton aumentar, comprobar que en el html ha cambiado a 55 ',()=>{
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click',null);
        fixture.detectChanges();
        fixture.whenStable().then(()=>{
            const elem:HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
            expect(elem.innerHTML).toContain('45');
        });       
    })

    it('al pinchar en el boton aumentar, comprobar que en el html ha cambiado a 55 ',()=>{
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[1].triggerEventHandler('click',null);
        fixture.detectChanges();
        fixture.whenStable().then(()=>{
            const elem:HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
            expect(elem.innerHTML).toContain('55');
        });       
    })

});
