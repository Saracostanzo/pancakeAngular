import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/pages/info/services/auth.service';

@Component({
  selector: 'pancake-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

obj:any
iters:any;
transaction:any=[
  {
add:"Add",
swaps:"Swaps",
removes:"Removes"
  }
]

 constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.cryptoData().then((res)=>{
      this.obj=res
      this.iters=this.obj.data.coins
      this.iters.forEach((element:any) => {
        element.price= Math.round(element.price)
        element.marketCap= Math.round(element.marketCap)
        element.btcPrice= Math.round(element.btcPrice)
        element.listedAt= Math.round(element.listedAt)
         console.log(this.iters)
        })


      });

    }
  }

