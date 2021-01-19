import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';


import {  Observable, of, Subject } from 'rxjs';


class FakeRouter{
  navigate(params){
      
  }
}

class FakeActivatedRoute{
   // params: Observable<any> = of({});
   //manejar los valores de un observables sera privada
   private subject = new Subject();

   push(valor){
      this.subject.next(valor);
   }

   get params(){
     return this.subject.asObservable(); //devuelve un nuevo observable
   }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers:[
        {provide:Router,useClass:FakeRouter},
        {provide:ActivatedRoute,useClass:FakeActivatedRoute}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe de redireccionar a Medico cuando se guarde',()=>{

    const router=TestBed.get(Router);
    const spy = spyOn(router,'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico','123']);
  })

  it('debe de renombrar el id = nuevo',()=>{
    component = fixture.componentInstance;
    const far:FakeActivatedRoute = TestBed.get(ActivatedRoute);
    
    far.push({id:'nuevo'});

    expect(component.id).toBe('nuevo');
  })


});
