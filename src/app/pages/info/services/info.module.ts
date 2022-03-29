import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoComponent } from '../info.component';
import { GraficoComponent } from '../grafico/grafico.component';

import { InfoOutletComponent } from '../info-outlet/info-outlet.component';
import { InfoRoutingModule } from './info.routing.module';
import { InfoAllPoolsComponent } from '../info-all-pools/info-all-pools.component';
import { InfoAllTokensComponent } from '../../info-all-tokens/info.all-tokens.component';



@NgModule({
  declarations: [
    InfoComponent,
    GraficoComponent,
    InfoOutletComponent,
    InfoAllPoolsComponent,
    InfoAllTokensComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
  ],
  exports: []
})
export class InfoModule { }
