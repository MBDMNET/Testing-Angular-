import { Routes } from "@angular/router";
import { HospitalComponent } from '../../intermedias2/hospital/hospital.component';
import { MedicoComponent } from '../../intermedias2/medico/medico.component';
import { IncrementadorComponent } from '../../intermedias2/incrementador/incrementador.component';




export const RUTAS:Routes =[
    {path:'hospital', component:HospitalComponent},
    {path:'medico/:id', component:MedicoComponent},
    {path:'**', component:IncrementadorComponent},

]