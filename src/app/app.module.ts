import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DarkmodeComponent } from './layout/elements/darkmode/darkmode.component';
import { EarnComponent } from './pages/earn/earn.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, DarkmodeComponent, EarnComponent, NavbarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
