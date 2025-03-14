import { Routes } from '@angular/router';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomeComponent } from './home/home.component';
import { EditarRecetaComponent } from './components/editar-receta/editar-receta.component';
import { RecetasPaginaComponent } from './pages/recetas-pagina/recetas-pagina.component';
import { FormSuscripcionComponent } from './components/form-suscripcion/form-suscripcion.component';
import { SuscripcionesComponent } from './components/suscripciones/suscripciones.component';
import { PerfilNutricionistaComponent } from './pages/perfil-nutricionista/perfil-nutricionista.component';
import { PerfilPacienteComponent } from './pages/perfil-paciente/perfil-paciente.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPacientesComponent } from './components/login-pacientes/login-pacientes.component';
import { loginGuard } from './guards/login.guard';
import { DietasComponent } from './pages/dietas/dietas.component';
import { ListaDietasComponent } from './components/lista-dietas/lista-dietas.component';
import { EditarDietaComponent } from './components/editar-dieta/editar-dieta.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { ListaConsultasComponent } from './components/lista-consultas/lista-consultas.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { RegistroPacienteService } from './service/registropaciente.service';
import { InicioPacientesComponent } from './components/inicio-pacientes/inicio-pacientes.component';
import { PresentacionNutriologosComponent } from './pages/presentacion-nutriologos/presentacion-nutriologos.component';
import { NutriolgosComponent } from './perfiles/nutriolgos/nutriolgos.component';
import { CarlosPerfilComponent } from './perfiles/carlos-perfil/carlos-perfil.component';
import { JavierPerfilComponent } from './perfiles/javier-perfil/javier-perfil.component';
import { SofiaPerfilComponent } from './perfiles/sofia-perfil/sofia-perfil.component';



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
        path:'suscripcionForm',
        component:FormSuscripcionComponent
    },
    {
        path:'suscripcion',
        component:SuscripcionesComponent
    },
    {
        path:'perfilNutri',
        component:PerfilNutricionistaComponent,
        canActivate:[loginGuard]
        
    },
    {path:'perfilPaciente',
        component:PerfilPacienteComponent,
        canActivate:[loginGuard]
    },
    {
        path:'sesionNutri',
        component:LoginComponent
    },
    {path:'sesionPaciente',
        component:LoginPacientesComponent
    },
    {path:'listaDietas',
        component:ListaDietasComponent
    },
    {
        path:'dietas',
        component:DietasComponent
    },
    {path:'dietas/:idDietas',
        component:EditarDietaComponent
    },
    {path:'consultas',
        component:ConsultasComponent
    },
    {path:'listaConsultas',
        component:ListaConsultasComponent
    },
    {
        path:'tienda',
        component:TiendaComponent
    },
    {
        path:'perfilesNutriologos',
        component:PresentacionNutriologosComponent
    },
    {path:'registerPaciente',
        component:InicioPacientesComponent
    },
    {
        path:'analopez',
        component:NutriolgosComponent,
        canActivate:[loginGuard]
    },
    {
        path:'carlos',
        component:CarlosPerfilComponent,
        canActivate:[loginGuard]
    },
    {
        path:'javier',
        component:JavierPerfilComponent,
        canActivate:[loginGuard]
    },
    {
        path:'sofia',
        component:SofiaPerfilComponent,
        canActivate:[loginGuard]
    }

    
];
