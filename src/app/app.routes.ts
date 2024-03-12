import { Routes } from '@angular/router';
import { MainPageComponent } from '../Components/main-page/main-page.component';
import { SignInComponent } from '../Components/sign-in/sign-in.component';
import { SignUpComponent } from '../Components/sign-up/sign-up.component';
import { ResetPaswwordComponent } from '../Components/reset-paswword/reset-paswword.component';
import { AgentsPageComponent } from '../Components/agents-page/agents-page.component';
import { TestapiComponent } from '../Components/testapi/testapi.component';
import { PatientsComponent } from '../Components/patients/patients.component';

export const routes: Routes = [
    {path:"acceuil",component:MainPageComponent},
    {path:"signin",component:SignInComponent},
    {path:"signup",component:SignUpComponent},
    {path:"forgetpassword",component:ResetPaswwordComponent},
    {path:"agents",component:AgentsPageComponent},
    {path:"ag/:searchterm",component:AgentsPageComponent},
    {path:"users",component:PatientsComponent},
    {path:"users/:searchterm",component:PatientsComponent},

    
    {path:"",redirectTo:"/acceuil",pathMatch:'full'}
];
