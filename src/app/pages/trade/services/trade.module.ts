import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination'
import { TradeHomeSwapComponent } from '../trade-home-swap/trade-home-swap.component';
import { TradeLimitComponent } from '../trade-limit/trade-limit.component';
import { TradeLiquidityComponent } from '../trade-liquidity/trade-liquidity.component';
import { TradeOutletComponent } from '../trade-outlet/trade-outlet.component';
import { TradeRoutingModule } from './trade.routing.module';



@NgModule({
  declarations: [
    TradeHomeSwapComponent,
    TradeLimitComponent,
    TradeLiquidityComponent,
    TradeOutletComponent
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    TradeRoutingModule

  ],
  exports: []
})
export class TradeModule { }
