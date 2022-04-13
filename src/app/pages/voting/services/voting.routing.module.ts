import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakeComponent } from '../make/make.component';
import { VotingContainerComponent } from '../voting-container/voting-container.component';
import { VotingOutletComponent } from '../voting-outlet/voting-outlet.component';





const routes: Routes = [
  {
    path: '',
    component: VotingOutletComponent ,
    children: [
      { path: '', component: VotingContainerComponent},
      { path: 'make', component: MakeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotingRoutingModule { }
