import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DarkmodeComponent } from './layout/elements/darkmode/darkmode.component';
import { EarnComponent } from './pages/earn/earn.component';
import { EarnHeaderComponent } from './pages/earn/earn-header/earn-header.component';
import { EarnContentComponent } from './pages/earn/earn-content/earn-content.component';
import { EanrListComponent } from './pages/earn/earn-content/eanr-list/eanr-list.component';
import { EanrCardComponent } from './pages/earn/earn-content/eanr-card/eanr-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AccordeonDirective } from './directives/accordeon/accordeon.directive';
import { EarnFilterComponent } from './pages/earn/earn-content/earn-filter/earn-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DarkmodeComponent,
    EarnComponent,
    EarnHeaderComponent,
    EarnContentComponent,
    EanrListComponent,
    EanrCardComponent,
    AccordeonDirective,
    EarnFilterComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
