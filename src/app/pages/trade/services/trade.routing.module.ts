import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeOutletComponent } from '../trade-outlet/trade-outlet.component';
import { TradeHomeSwapComponent } from '../trade-home-swap/trade-home-swap.component';
import { TradeLimitComponent } from '../trade-limit/trade-limit.component';
import { TradeLiquidityComponent } from '../trade-liquidity/trade-liquidity.component';


const routes: Routes = [
  {
    path: '',
    component: TradeOutletComponent ,
    children: [
      { path: '', component: TradeHomeSwapComponent},
      { path: 'limit', component: TradeLimitComponent },
      { path: 'liquidity', component: TradeLiquidityComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeRoutingModule { }
