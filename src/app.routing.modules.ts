import { NgModule } from "@angular/core";
import{Routes , RouterModule}from "@angular/router";
import { EarnComponent } from "./app/pages/earn/earn.component";
import { HomeComponent } from "./app/pages/home/home.component";
import { VotingContainerComponent } from "./app/pages/voting/voting-container/voting-container.component";
import { TradeHomeSwapComponent } from "./app/trade-home-swap/trade-home-swap.component";

const routers: Routes=[
  {path:"home", component: HomeComponent },
  {path:"trade", component: TradeHomeSwapComponent },
  {
    path: 'info',
    loadChildren: () => import('./app/pages/info/services/info.module').then(m => m.InfoModule),
  },
  {path:"earn", component: EarnComponent },
  {
    path: 'voting',
    loadChildren: () => import('./app/pages/voting/services/voting.module').then(m => m.VotingModule),
  },
  {path:"", redirectTo:"/home", pathMatch:"full"}

];
@NgModule({
imports:[
  RouterModule.forRoot(routers)
],
exports:[RouterModule]
})
 export class AppRoutingModule{}
