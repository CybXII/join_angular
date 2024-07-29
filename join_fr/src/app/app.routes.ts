import { ResolveFn, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { MainComponent } from './main/main.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { SummaryComponent } from './summary/summary.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HelpSiteComponent } from './help-site/help-site.component';

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
        { path: '', redirectTo: 'login', pathMatch: 'full' },

    ]
    },
    {
        path: 'main',
        component: MainComponent,
        children: [
        { path: '', redirectTo: 'board', pathMatch: 'full' },
        {
            path: 'summary', // child route path
            component: SummaryComponent, // child route component that the router renders
        },
        {
            path: 'addTask', // child route path
            component: AddTaskComponent, // child route component that the router renders
        },
        {
            path: 'board', // child route path
            component: BoardComponent, // child route component that the router renders
        },
        {
            path: 'contacts', // child route path
            component: ContactsComponent, // child route component that the router renders
        },
        {
            path: 'privacy', // child route path
            component: PrivacyComponent, // child route component that the router renders
        },
        {
            path: 'legal_notice', // child route path
            component: LegalNoticeComponent, // child route component that the router renders
        },
        {
            path: 'help', // child route path
            component: HelpSiteComponent, // child route component that the router renders
        },
        ],

    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'main/login', redirectTo: 'login', pathMatch: 'full' },
];