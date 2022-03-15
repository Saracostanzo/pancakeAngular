import { NgModule } from "@angular/core";
import{Routes , RouterModule}from "@angular/router";
import { HomeComponent } from "./app/pages/home/home.component";

const routers: Routes=[
  {path:"home", component: HomeComponent },
];
@NgModule({
imports:[
  RouterModule.forRoot(routers)
],
exports:[RouterModule]
})
 export class AppRoutingModule{}
