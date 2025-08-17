import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Notfound } from './pages/notfound/notfound';
import path from 'path';
import { Component } from '@angular/core';
import { Pages } from './pages/pages';
import { register } from 'module';
import { Login } from './auth/login/login';
import { Register } from './pages/register/register';

export const routes: Routes = [
    {path:"", component: Pages, 
    children: [
        {path:"dashboard", component: Dashboard},
    ]},
    

    {path:"register", component: Register},
    {path:"login", component: Login},
    {path:"notfound", component: Notfound},
    
    {path:"**", component: Notfound},
];
