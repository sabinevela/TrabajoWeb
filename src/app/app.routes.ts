import { Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'nosotros',
        component:NosotrosComponent
    },
    {path:'contador',
        component:FormularioComponent
    },
    {path:'contactos',
        component:ContactosComponent
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {path:'home',
        component:HomeComponent
    }
    
];
