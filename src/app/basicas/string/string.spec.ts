import { mensaje } from './string';
//describe('pruebas de strings'); //hace referencia a : pruebas de strings (Todo lo referente a la carpeta de strings)

it('debe devolver un string'); //el it vale para saber que es una prueba en especifico

it('debe tener un nombre'); //el it vale para saber que es una prueba en especifico


describe('pruebas de string',() =>{
   it('tiene que devolver un string', () =>{
      const resp = mensaje('Manuel');
      expect(typeof resp).toBe('string'); //para evaluar si la funcion lo hace bien o no
   });

   it('tiene que devolver un saludo con el nombre enviado', () =>{
       const nombre = 'juan'
    const resp = mensaje(nombre);

    expect(resp).toContain(nombre); //ver si la respuesta contiene el nombre que hemos pasado como constante
 });
});