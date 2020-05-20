import { Routes, CanActivate, Router } from "@angular/router";
import { LandingPage } from '../pages/landing/landing.component';
 import { ProfileComponent } from '../pages/profile/profile.page';
import { LoginPage } from '../pages/login/login.page';

export const routes:Routes = [
    { 
        path:'', component:LandingPage
    },
    // {
    //     path: "profile", component: ProfileComponent, canActivate:[AuthGuard]
    // },
    {
        path:"login",component:LoginPage
    }
]
