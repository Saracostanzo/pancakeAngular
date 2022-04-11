import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { VotingRoutingModule } from './voting.routing.module';

import { VotingContainerComponent } from '../voting-container/voting-container.component';


@NgModule({
  declarations: [
    VotingContainerComponent
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    VotingRoutingModule,

  ],
  exports: []
})
export class VotingModule { }
