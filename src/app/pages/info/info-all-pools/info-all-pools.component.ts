import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Tokens } from '../services/interface-token';

@Component({
  selector: 'pancake-info-all-pools',
  templateUrl: './info-all-pools.component.html',
  styleUrls: ['./info-all-pools.component.css']
})
export class InfoAllPoolsComponent implements OnInit {

  tokens$!: Observable<Tokens[]>;
coinPrice!:any
   constructor(private service: AuthService) { }

    ngOnInit(): void {
      // this.service.cryptoData().then((res)=>{
      //   this.obj=res
      //   this.iters=this.obj.data.coins
      //   this.iters.forEach((element:any) => {
      //     element.price= Math.round(element.price)
      //     element.marketCap= Math.round(element.marketCap)
      //     element.btcPrice= Math.round(element.btcPrice)
      //     element.listedAt= Math.round(element.listedAt)
      //      console.log(this.iters)
      //     })


      //   });
      this.tokens$ = this.service.getAllToken();
    }
}
