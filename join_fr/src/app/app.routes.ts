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
import { ExtPrivacyComponent } from './ext-privacy/ext-privacy.component';
import { ExtLegalComponent } from './ext-legal/ext-legal.component';

export const routes: Routes = [
    {
    path: '',
    component: LoginComponent,
    children: [
        {
            path: 'login',
            title: 'login',
            component: LoginFormComponent,
        },
        {
            path: 'signup',
            title: 'signup',
            component: SignupFormComponent,
        },
        {
            path: 'signup/login',
            redirectTo: 'login',
            pathMatch: 'full',
        },
        { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
    },
    {
        path: 'signup/ext_privacy',
        redirectTo: 'ext_privacy', 
        pathMatch: 'full'       
    },
    {
        path: 'login/ext_privacy',
        redirectTo: 'ext_privacy', 
        pathMatch: 'full'       
    },
    {
        path: 'ext_privacy',
        title: 'ext_privacy',
        component: ExtPrivacyComponent,
    },
    {
        path: 'signup/ext_legal',
        redirectTo: 'ext_legal', 
        pathMatch: 'full'       
    },
    {
        path: 'login/ext_legal',
        redirectTo: 'ext_legal', 
        pathMatch: 'full'       
    },
    {
        path: 'ext_legal',
        title: 'ext_legal',
        component: ExtLegalComponent,
    },
    {
    path: 'main',
    component: MainComponent,
    children: [
        { path: '', redirectTo: 'board', pathMatch: 'full' },
        {
            path: 'summary',
            component: SummaryComponent,
        },
        {
            path: 'addTask',
            component: AddTaskComponent,
        },
        {
            path: 'board',
            component: BoardComponent,
        },
        {
            path: 'contacts',
            component: ContactsComponent,
        },
        {
            path: 'privacy',
            component: PrivacyComponent,
        },
        {
            path: 'legal_notice',
            component: LegalNoticeComponent,
        },
        {
            path: 'help',
            component: HelpSiteComponent,
        },
    ],
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'main/login', redirectTo: 'login', pathMatch: 'full' },
];
