import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { VotingRoutingModule } from './voting.routing.module';

import { VotingContainerComponent } from '../voting-container/voting-container.component';
import { MakeComponent } from '../make/make.component';
import { VotingOutletComponent } from '../voting-outlet/voting-outlet.component';


@NgModule({
  declarations: [
    VotingContainerComponent,
    VotingOutletComponent,
    MakeComponent
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    VotingRoutingModule,
  ],
  exports: []
})
export class VotingModule { }
