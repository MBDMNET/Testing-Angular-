import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
describe('prueba de formularios',()=>{
    let componente:FormularioRegister;
    beforeEach(()=>{

        componente = new FormularioRegister(new FormBuilder());//esto envia cada una de las pruebas un nuevo formulario
    })
    it('Debe de crear un formulario con 2 campos, email y password',()=>{
        
        expect(componente.form.contains('email')).toBeTruthy(); //debe de existir un campo llamado email
        expect(componente.form.contains('password')).toBeTruthy(); //debe de existir un campo llamado email
       

    });

    //Pruebas para evaluar los campos

    it('El email y la password tienen que ser obligatorios',()=>{
        let control = componente.form.get('email');
        control.setValue(''); //esto deberia de romper la condicion de required
        expect(control.valid).toBeFalsy();

        control = componente.form.get('password');
        control.setValue(''); //esto deberia de romper la condicion de required
        expect(control.valid).toBeFalsy();


    });

    it('El email tiene que ser un correo valido',()=>{
        let control = componente.form.get('email');
        control.setValue('pedro@gmail.com'); //esto deberia de romper la condicion de required
        expect(control.valid).toBeTruthy(); //falla por que pedro@ no es un correo

        


    });
    
})