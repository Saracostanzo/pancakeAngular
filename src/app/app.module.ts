import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DarkmodeComponent } from './layout/elements/darkmode/darkmode.component';
import { EarnComponent } from './pages/earn/earn.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { CompetitionHeaderComponent } from './pages/competition/competition-header/competition-header.component';
import { CompetitionContentComponent } from './pages/competition/competition-content/competition-content.component';


@NgModule({
  declarations: [AppComponent, FooterComponent, DarkmodeComponent, EarnComponent, CompetitionComponent, CompetitionHeaderComponent, CompetitionContentComponent,],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
