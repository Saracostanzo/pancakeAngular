import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DarkmodeComponent } from './layout/elements/darkmode/darkmode.component';
import { EarnComponent } from './pages/earn/earn.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { InfoComponent } from './pages/info/info.component';
import { GraficoComponent } from './grafico/grafico.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, DarkmodeComponent, EarnComponent, NavbarComponent, InfoComponent, GraficoComponent],
  imports: [BrowserModule , ChartModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
