import {Routes,RouterModule} from '@angular/router'

import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes =[

    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NopagefoundComponent}
];
export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash: true} );