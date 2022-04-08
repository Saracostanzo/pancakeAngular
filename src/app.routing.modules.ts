import { NgModule } from "@angular/core";
import{Routes , RouterModule}from "@angular/router";
import { CompetitionComponent } from "./app/pages/competition/competition.component";
import { EarnComponent } from "./app/pages/earn/earn.component";
import { HomeComponent } from "./app/pages/home/home.component";
import { NftComponent } from "./app/pages/nft/nft.component";


const routers: Routes=[
  {path:"home", component: HomeComponent },
  {
    path: 'info',
    loadChildren: () => import('./app/pages/info/services/info.module').then(m => m.InfoModule),
  },
  {path:"earn", component: EarnComponent },
  {
    path: 'voting',
    loadChildren: () => import('./app/pages/voting/services/voting.module').then(m => m.VotingModule),
  },
  {
    path: 'trade',
    loadChildren: () => import('./app/pages/trade/services/trade.module').then(m => m.TradeModule),
  },
  {path:"competition",component:CompetitionComponent},
  {path:"nft", component:NftComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"}

];
@NgModule({
imports:[
  RouterModule.forRoot(routers)
],
exports:[RouterModule]
})
 export class AppRoutingModule{}
