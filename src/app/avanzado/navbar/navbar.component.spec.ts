import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { AppComponent } from '../../app.component';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe dtener un link a la pagina de medicos',()=>{
   
    fixture.detectChanges();
    const enlaces = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    console.log(enlaces);
   
     let existe = false;
     for(let enlace of enlaces){
       if(enlace.attributes['routerLink']==='/medicos')
       {
         existe=true;
         break;
       }
       expect(existe).toBeTruthy();
     }
  });
});
