import { ResolveFn, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { 
        path: '',
        component: LoginComponent,
        children: [
            {
                path: 'login', // child route path
                title: 'login',
                component: LoginFormComponent, // child route component that the router renders
            },
            {
                path: 'signup',
                title: 'signup',
                component: SignupFormComponent, // another child route component that the router renders
            },
        ]
        
    },
    { 
        path: 'main',
        component: MainComponent,
        children: [
            {
                path: 'board', // child route path
                title: 'board',
                component: BoardComponent, // child route component that the router renders
            },
        ]        
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },

];

