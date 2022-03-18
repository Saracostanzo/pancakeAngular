import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DarkmodeComponent } from './layout/elements/darkmode/darkmode.component';
import { EarnComponent } from './pages/earn/earn.component';
import { NftComponent } from './pages/nft/nft.component';
import { NftHeaderComponent } from './pages/nft/nft-header/nft-header.component';
import { NftContentComponent } from './pages/nft/nft-content/nft-content.component';
import { NewestCollectionsComponent } from './pages/nft/nft-content/newest-collections/newest-collections.component';
import { HotCollectionsComponent } from './pages/nft/nft-content/hot-collections/hot-collections.component';
import { NewestArrivalsComponent } from './pages/nft/nft-content/newest-arrivals/newest-arrivals.component';
import { FaqsComponent } from './pages/nft/nft-content/faqs/faqs.component';


@NgModule({
  declarations: [AppComponent, FooterComponent, DarkmodeComponent, EarnComponent, NftComponent, NftHeaderComponent, NftContentComponent, NewestCollectionsComponent, HotCollectionsComponent, NewestArrivalsComponent, FaqsComponent,],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
