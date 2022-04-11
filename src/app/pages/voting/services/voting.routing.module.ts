import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotingCommunityComponent } from '../voting-community/voting-community.component';
import { VotingContainerComponent } from '../voting-container/voting-container.component';
import { VotingCoreComponent } from '../voting-core/voting-core.component';
import { VotingOutletComponent } from '../voting-outlet/voting-outlet.component';



const routes: Routes = [
  {
    path: '',
    component: VotingOutletComponent ,
    children: [
      { path: '', component: VotingContainerComponent },
      { path: 'core', component: VotingCoreComponent },
      { path: 'community', component: VotingCommunityComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotingRoutingModule { }
