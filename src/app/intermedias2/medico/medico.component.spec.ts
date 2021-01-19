
import { MedicoComponent } from './medico.component';
import {TestBed,ComponentFixture} from '@angular/core/testing'
import { MedicoService } from './medico.service';
import {  HttpClientModule } from '@angular/common/http';
describe('Medico2 Component',()=>{

    let component:MedicoComponent;
    let fixture:ComponentFixture<MedicoComponent>;
    beforeEach(()=>{

                //con el testbed configuro lo que neceisto o lo que usa ese componente
            TestBed.configureTestingModule({
                declarations:[MedicoComponent],
                providers:[MedicoService],
                imports:[HttpClientModule]
            });

            //aqui preparo o creo un componente usando solo lo que hemos declarado arriba
            fixture =  TestBed.createComponent(MedicoComponent);
            component = fixture.componentInstance;           
    })
    it('debe de crearse un componente',()=>{

        expect(component).toBeTruthy();
    })

    it('debe de revolver el nombre del medico',()=>{
        const nombre='juan';
        const funcionResp = component.saludarMedico(nombre);
        expect(funcionResp).toContain(nombre);
    })
})