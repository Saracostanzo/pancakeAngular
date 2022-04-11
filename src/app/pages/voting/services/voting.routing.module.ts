import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotingContainerComponent } from '../voting-container/voting-container.component';





const routes: Routes = [
{ path: '', component: VotingContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotingRoutingModule { }
