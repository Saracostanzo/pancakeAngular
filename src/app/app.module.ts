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
import { TradeService } from './pages/trade/services/trade.service.module';
import { NftComponent } from './pages/nft/nft.component';
import { NftHeaderComponent } from './pages/nft/nft-header/nft-header.component';
import { NftContentComponent } from './pages/nft/nft-content/nft-content.component';
import { NewestCollectionsComponent } from './pages/nft/nft-content/newest-collections/newest-collections.component';
import { HotCollectionsComponent } from './pages/nft/nft-content/hot-collections/hot-collections.component';
import { NewestArrivalsComponent } from './pages/nft/nft-content/newest-arrivals/newest-arrivals.component';
import { FaqsComponent } from './pages/nft/nft-content/faqs/faqs.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { CompetitionContentComponent } from './pages/competition/competition-content/competition-content.component';
import { CompetitionFooterComponent } from './pages/competition/competition-footer/competition-footer.component';
import { CompetitionHeaderComponent } from './pages/competition/competition-header/competition-header.component';
import { PrizesComponent } from './pages/competition/competition-content/prizes/prizes.component';
import { RulesComponent } from './pages/competition/competition-content/rules/rules.component';
import { YourScoreComponent } from './pages/competition/competition-content/your-score/your-score.component';
import { TeamReanksComponent } from './pages/competition/competition-content/team-reanks/team-reanks.component';



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
    NftComponent,
    NftHeaderComponent,
    NftContentComponent,
    HotCollectionsComponent,
    NewestArrivalsComponent,
    NewestCollectionsComponent,
    FaqsComponent,
    CompetitionComponent,
    CompetitionContentComponent,
    CompetitionFooterComponent,
    CompetitionHeaderComponent,
    PrizesComponent,
    RulesComponent,
    YourScoreComponent,
    TeamReanksComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfoModule,
  ],

  providers: [AuthService, VotingService, TradeService],

  bootstrap: [AppComponent],
})
export class AppModule { }
