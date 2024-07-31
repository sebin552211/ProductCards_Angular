import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent:()=>import('./pages/home/home.component').then ((m) => m.HomeComponent)
    },
    {
        path: 'login', loadComponent:()=>import('./pages/login/login.component').then ((m) => m.LoginComponent)
    },
    {
        path: 'contact', loadComponent:()=>import('./pages/contact/contact.component').then ((m) => m.ContactComponent)
    },
    {
        path: 'product/:id', loadComponent:()=>import('./pages/viewproduct/viewproduct.component').then ((m) => m.ViewProductComponent)
    }
];
