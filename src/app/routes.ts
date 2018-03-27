import {Routes} from '@angular/router'
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { Dashboard2Component } from './dashboard2/dashboard2.component';



export const appRoutes:Routes=[
   
    { path: 'app-login', component: LoginComponent },
    { path: 'registrationPage', component: RegistrationComponent },
    { path: 'dashbordPage1', component: DashbordComponent, canActivate: [AuthGuard] },
    {
        path:'homePage', component:HomeComponent,
        children:[
            {
                path:'dashbordPage1', component: DashbordComponent,
              
            },
            {
                path:'dashbordPage2', component: Dashboard2Component,
              
            },
           
        ],
    },
        {path:'', redirectTo:'/app-login', pathMatch:'full' }
    // otherwise redirect to home
 // {path:'', redirectTo:'/app-login', pathMatch:'full' }

// {path:'landingPage', component:LandingComponent},
// { path:'app-login', component:LoginComponent},
// {path:'registrationPage', component:RegistrationComponent},
// {path:'homePage', component:HomeComponent, canActivate: [AuthGuard]},
// //{path:'app-dashbord', component:DashbordComponent, canActivate: [AuthGuard]},
// {path:'', redirectTo:'/app-login', pathMatch:'full' }

]