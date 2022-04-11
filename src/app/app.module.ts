import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app.routing.modules';
import { AppComponent } from './app.component';
import { AccordeonDirective } from './directives/accordeon/accordeon.directive';
import { DarkmodeComponent } from './layout/elements/darkmode/darkmode.component';

import { FooterComponent } from './layout/footer/footer.component';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { EanrCardComponent } from './pages/earn/earn-content/eanr-card/eanr-card.component';
import { EanrListComponent } from './pages/earn/earn-content/eanr-list/eanr-list.component';
import { EarnContentComponent } from './pages/earn/earn-content/earn-content.component';
import { EarnFilterComponent } from './pages/earn/earn-content/earn-filter/earn-filter.component';
import { EarnHeaderComponent } from './pages/earn/earn-header/earn-header.component';
import { EarnComponent } from './pages/earn/earn.component';
import { HomeComponent } from './pages/home/home.component';
import { TabCakeComponent } from './pages/home/tab-cake/tab-cake.component';
import { TabSwitchComponent } from './pages/home/tab-switch/tab-switch.component';
import { AuthService } from './pages/info/services/auth.service';
import { InfoModule } from './pages/info/services/info.module';
import { VotingModule } from './pages/voting/services/voting.module';
import { VotingService } from './pages/voting/services/voting.service.module';
import { VotingContainerComponent } from './pages/voting/voting-container/voting-container.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { CompetitionHeaderComponent } from './pages/competition/competition-header/competition-header.component';
import { YourScoreComponent } from './pages/competition/competition-content/your-score/your-score.component';
import { TeamReanksComponent } from './pages/competition/competition-content/team-reanks/team-reanks.component';
import { PrizesComponent } from './pages/competition/competition-content/prizes/prizes.component';
import { RulesComponent } from './pages/competition/competition-content/rules/rules.component';
import { CompetitionFooterComponent } from './pages/competition/competition-footer/competition-footer.component';
import { CompetitionContentComponent } from './pages/competition/competition-content/competition-content.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DarkmodeComponent,
    EarnComponent,
    NavbarComponent,
    EarnHeaderComponent,
    EarnContentComponent,
    EanrListComponent,
    EanrCardComponent,
    AccordeonDirective,
    EarnFilterComponent,
    HomeComponent,
    TabSwitchComponent,
    TabCakeComponent,
    CompetitionComponent, CompetitionHeaderComponent, YourScoreComponent, TeamReanksComponent, PrizesComponent, RulesComponent, CompetitionFooterComponent, CompetitionContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfoModule,
    VotingModule,
  ],
  providers: [AuthService, VotingService],

  bootstrap: [AppComponent],
})
export class AppModule { }
