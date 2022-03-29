import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoAllTokensComponent } from '../info-all-tokens/info.all-tokens.component';
import { GraficoComponent } from '../grafico/grafico.component';
import { InfoAllPoolsComponent } from '../info-all-pools/info-all-pools.component';
import { InfoOutletComponent } from '../info-outlet/info-outlet.component';
import { InfoComponent } from '../info.component';


const routes: Routes = [
  {
    path: '',
    component: InfoOutletComponent ,
    children: [
      { path: '', component: InfoComponent },
      {
        path: 'grafico',
        component: GraficoComponent,
      },
      { path: 'allTokens', component: InfoAllTokensComponent },
      { path: 'allPools', component: InfoAllPoolsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
