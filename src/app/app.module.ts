import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DarkmodeComponent } from './layout/elements/darkmode/darkmode.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, DarkmodeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
