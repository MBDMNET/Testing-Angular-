
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { empty, from, throwError } from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null); // le envio null ya que no voy a hacer nada con el http

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe de Cargar los medicos', () => {
            //Concepto de los espias
            /*
            hacer peticiones falsas cuando suceda algo
            Espia el servicio, y cuando alguien llame a get edicos
            vas a llamar y ejecutar la funcion que yo voy a definir    
            */
            const medicos =  ['medico1','medico2','medico3'];
            spyOn(servicio,'getMedicos').and.callFake(()=>{
                return from([medicos]);
            })
        
           //llamamos manualmente ya que no se encuentra en el constructor
           componente.ngOnInit();

           //espera que el componeente medicos contenga algun medico 
           expect(componente.medicos.length).toBeGreaterThanOrEqual(0);
    });

    it('Init: Debe de llamar al metodo para agregar un medico', () => {
        //Concepto de los espias
        /*
            vamos a hacer una llamada falsa al metodo agregarMedico() 
            diciendo nosotros lo que va devolveria
        */
        
       const espia = spyOn(servicio,'agregarMedico').and.callFake(medico=>{
            return empty();
        })
    
       //llamamos manualmente ya que no se encuentra en el constructor
       componente.agregarMedico();

       //espera que el componeente medicos contenga algun medico 
       expect(espia).toHaveBeenCalled();
});

it('debe agregar un nuevo medico al arreglo de medicos', () => {
    
    /*
        vamos a simular que tenemos un medico, y cuando se simule la llama de agregar medico
        entonces va a devolver ese medico
    */
    const medico = {id:1,nombre:'manuel'};
    spyOn(servicio,'agregarMedico').and.returnValue(from([medico]))

   //llamamos manualmente ya que no se encuentra en el constructor
   componente.agregarMedico();

   //busca el medico que hemos añadido, en el array de medicos
   expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0)
});

it('si falla el añadir el medico, la propiedad mensaje error == al error del servicio',()=>{

    const miError = 'No se ha añadido el Medico';
    spyOn(servicio,'agregarMedico').and
                //aqui obligamos a que lance un supuesto error
                        .returnValue(throwError(miError));

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(miError);

});


it('debe de llamar al servidor para borrar un medico',()=>{

    //Simular que le damos ok para borrar el medico
    spyOn(window,'confirm').and.returnValue(true);//siempre le dariamos a ok por ejemplo
  
    const espia = spyOn(servicio,'borrarMedico').and.returnValue(empty());

    componente.borrarMedico('1');
    
    expect(espia).toHaveBeenCalledWith('1')// para ver si ha sido llamado con algun argumento

});

it('No debe de llamar al servidor para borrar un medico',()=>{

    //Simular que le damos ok para borrar el medico
    spyOn(window,'confirm').and.returnValue(false);//siempre le dariamos a ok por ejemplo
    
    const espia = spyOn(servicio,'borrarMedico').and.returnValue(empty());

    componente.borrarMedico('1');
    
    expect(espia).not.toHaveBeenCalledWith('1')// para ver si ha sido llamado con algun argumento

});


});
