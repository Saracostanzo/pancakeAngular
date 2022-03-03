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

@NgModule({
  declarations: [AppComponent, FooterComponent, DarkmodeComponent, EarnComponent, NavbarComponent, InfoComponent, GraficoComponent],
  imports: [BrowserModule , HttpClientModule ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
