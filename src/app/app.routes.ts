import { Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomeComponent } from './home/home.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { EditarRecetaComponent } from './components/editar-receta/editar-receta.component';
import { RecetasPaginaComponent } from './pages/recetas-pagina/recetas-pagina.component';
import { SuscripcionComponent } from './pages/suscripcion/suscripcion.component';

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
    },
    {path:'recetas',
        component:RecetasPaginaComponent
    },
    {path:'recetas/:idRecetas',
        component:EditarRecetaComponent
    },
    {
        path:'suscripcion',
        component:SuscripcionComponent
    }
    
];
