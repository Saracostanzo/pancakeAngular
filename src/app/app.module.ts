import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DarkmodeComponent } from './layout/elements/darkmode/darkmode.component';
import { EarnComponent } from './pages/earn/earn.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { CompetitionHeaderComponent } from './pages/competition/competition-header/competition-header.component';
import { YourScoreComponent } from './pages/competition/your-score/your-score.component';
import { TeamReanksComponent } from './pages/competition/team-reanks/team-reanks.component';
import { PrizesComponent } from './pages/competition/prizes/prizes.component';
import { RulesComponent } from './pages/competition/rules/rules.component';
import { CompetitionFooterComponent } from './pages/competition/competition-footer/competition-footer.component';


@NgModule({
  declarations: [AppComponent, FooterComponent, DarkmodeComponent, EarnComponent, CompetitionComponent, CompetitionHeaderComponent, YourScoreComponent, TeamReanksComponent, PrizesComponent, RulesComponent, CompetitionFooterComponent,],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
