import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DarkmodeComponent } from './layout/elements/darkmode/darkmode.component';
import { EarnComponent } from './pages/earn/earn.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { InfoComponent } from './pages/info/info.component';
import { GraficoComponent } from './pages/info/grafico/grafico.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { TabSwitchComponent } from './pages/home/tab-switch/tab-switch.component';
import { TabCakeComponent } from './pages/home/tab-cake/tab-cake.component';
import { AppRoutingModule } from 'src/app.routing.modules';

@NgModule({
  declarations: [AppComponent, FooterComponent, DarkmodeComponent, EarnComponent, NavbarComponent, InfoComponent, GraficoComponent, HomeComponent, TabSwitchComponent, TabCakeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers:  [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
