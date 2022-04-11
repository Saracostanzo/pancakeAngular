import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { VotingRoutingModule } from './voting.routing.module';
import { VotingCommunityComponent } from '../voting-community/voting-community.component';
import { VotingContainerComponent } from '../voting-container/voting-container.component';
import { VotingCoreComponent } from '../voting-core/voting-core.component';
import { VotingOutletComponent } from '../voting-outlet/voting-outlet.component';


@NgModule({
  declarations: [
    VotingCommunityComponent,
    VotingContainerComponent,
    VotingCoreComponent,
    VotingOutletComponent
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    VotingRoutingModule,

  ],
  exports: []
})
export class VotingModule { }
