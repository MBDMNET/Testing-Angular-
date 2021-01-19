import { RUTAS } from './app.routes';
import { MedicoComponent } from '../../intermedias2/medico/medico.component';

describe('Ruras Principales',()=>{

    it('Debe de existir la rita medico/:id ',()=>{

        expect(RUTAS).toContain({
            path:'medico/:id',
            component:MedicoComponent
        })
    })
})