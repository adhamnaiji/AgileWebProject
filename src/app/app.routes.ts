import { Routes } from '@angular/router';
import { MainPageComponent } from '../Components/main-page/main-page.component';
import { SignInComponent } from '../Components/sign-in/sign-in.component';
import { SignUpComponent } from '../Components/sign-up/sign-up.component';
import { ResetPaswwordComponent } from '../Components/reset-paswword/reset-paswword.component';
import { AgentsPageComponent } from '../Components/agents-page/agents-page.component';
import { TestapiComponent } from '../Components/testapi/testapi.component';
import { PatientsComponent } from '../Components/patients/patients.component';
import { ProfileComponent } from '../Components/profile/profile.component';
import { SettingsComponent } from '../Components/settings/settings.component';
import { AdminComponent } from '../Components/admin/admin.component';
import { SearchComponent } from '../Components/search/search.component';
import { NavbarComponent } from '../Components/navbar/navbar.component';

export const routes: Routes = [
    {path:"acceuil",component:MainPageComponent,},
    {path:"signin",component:SignInComponent},
    {path:"signup",component:SignUpComponent},
    {path:"forgetpassword",component:ResetPaswwordComponent},
    {path:"agents",component:AgentsPageComponent},
    {path:"ag/:searchterm",component:AgentsPageComponent},
    //{path:"users",component:PatientsComponent},
    //{path:"users/:searchterm",component:PatientsComponent},
    {path:"profile",component:ProfileComponent},
    {path:"settings",component:SettingsComponent},

    {
        path:"admin",
        component:AdminComponent,
        children: [

            { path: "users", component: PatientsComponent }, 
            {path:"users/:searchterm",component:PatientsComponent},
            { path: "agents", component: AgentsPageComponent }, 
            {path:"agents/:searchterm",component:AgentsPageComponent},

            // Add more admin routes as needed
          ]
    },

    {path:"",redirectTo:"/acceuil",pathMatch:'full'},

]; 
