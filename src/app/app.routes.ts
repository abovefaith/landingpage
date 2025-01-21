import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { Home2Component } from './core/pages/home-2/home-2.component';
import { Home3Component } from './core/pages/home-3/home-3.component';
import { Home4Component } from './core/pages/home-4/home-4.component';

export const routes: Routes = [
    // { path: "", component: HomeComponent, pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'home2', component: Home2Component },
    { path: 'home3', component: Home3Component },
    { path: 'home4', component: Home4Component },

];
