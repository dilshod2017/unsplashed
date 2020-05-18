import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CacheService } from './service/modules/cache.service';
import { MainControlService } from './service/control/main.control.service';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './pages/landing/landing.component';
import { routes } from './routes/routes';
import { NavBarComponent } from './nav/nav';
@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    NavBarComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [
    CacheService,
    MainControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
