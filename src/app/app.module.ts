import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './pages/landing/landing.component';
import { routes } from './routes/routes';
import { NavBarComponent } from './nav/nav';
import { TabsMainComponent } from './components/tabs/tabs.component';
import { ProfileComponent } from './pages/profile/profile.page';
import { LoginPage } from './pages/login/login.page';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { OAuth } from './authentication/OAuth/OAuth';
import { Cache } from './service/cache/cache';
import { TokenInterceptor } from './authentication/Interseptor/http.interceptor';


 @NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    NavBarComponent,
    TabsMainComponent,
    ProfileComponent,
    LoginPage
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    OAuth,
    Cache,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi:true
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
