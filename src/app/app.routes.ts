import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full" },
    // { path: 'home', component: HomeComponent },
];
