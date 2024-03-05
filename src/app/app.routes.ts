import { Routes } from '@angular/router';
import { MainPageComponent } from '../Components/main-page/main-page.component';
import { SignInComponent } from '../Components/sign-in/sign-in.component';
import { SignUpComponent } from '../Components/sign-up/sign-up.component';
import { ResetPaswwordComponent } from '../Components/reset-paswword/reset-paswword.component';
import { AgentsPageComponent } from '../Components/agents-page/agents-page.component';

export const routes: Routes = [
    {path:"acceuil",component:MainPageComponent},
    {path:"signin",component:SignInComponent},
    {path:"signup",component:SignUpComponent},
    {path:"forgetpassword",component:ResetPaswwordComponent},
    {path:"",component:AgentsPageComponent},
    {path:"ag/:searchterm",component:AgentsPageComponent},
    //{path:"",redirectTo:"/acceuil",pathMatch:'full'}
];
