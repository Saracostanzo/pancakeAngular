import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DarkmodeComponent } from './layout/elements/darkmode/darkmode.component';
import { EarnComponent } from './pages/earn/earn.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AuthService } from './auth.service';
import { EarnHeaderComponent } from './pages/earn/earn-header/earn-header.component';
import { EarnContentComponent } from './pages/earn/earn-content/earn-content.component';
import { EanrListComponent } from './pages/earn/earn-content/eanr-list/eanr-list.component';
import { EanrCardComponent } from './pages/earn/earn-content/eanr-card/eanr-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AccordeonDirective } from './directives/accordeon/accordeon.directive';
import { EarnFilterComponent } from './pages/earn/earn-content/earn-filter/earn-filter.component';
import { InfoComponent } from './pages/info/info.component';
import { GraficoComponent } from './pages/info/grafico/grafico.component';
import { AppRoutingModule } from 'src/app.routing.modules';
import { HomeComponent } from './pages/home/home.component';
import { TabSwitchComponent } from './pages/home/tab-switch/tab-switch.component';
import { TabCakeComponent } from './pages/home/tab-cake/tab-cake.component';
@NgModule({
  declarations: [AppComponent, FooterComponent, DarkmodeComponent, EarnComponent, NavbarComponent, InfoComponent,EarnHeaderComponent, EarnContentComponent, EanrListComponent,EanrCardComponent,AccordeonDirective, EarnFilterComponent, GraficoComponent, HomeComponent, TabSwitchComponent, TabCakeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers:  [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
