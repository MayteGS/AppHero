import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { InformacionHeroeComponent } from './components/informacion-heroe/informacion-heroe.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'InformacionHeroe/:id', component: InformacionHeroeComponent },
    { path: 'BuscarHeroe/:termino', component: BuscarHeroeComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);