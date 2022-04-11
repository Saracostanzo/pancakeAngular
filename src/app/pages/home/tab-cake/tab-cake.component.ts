import { Component, OnInit } from '@angular/core';
import { ValueChange } from '../interfacce home/interfaccia-tab-cake-valuechange';

@Component({
  selector: 'pancake-tab-cake',
  templateUrl: './tab-cake.component.html',
  styleUrls: ['./tab-cake.component.css']
})
export class TabCakeComponent implements OnInit {
  tab:ValueChange[]=[
    {
      h5:"Total supply",
      value: 271159241
    },
    {
      h5:"Burned to date",
      value: 339094304
    },
    {
      h5:"Market cap",
      value1:"$1.7 billion"
    },
    {
      h5:"Current emissions",
      value1:"14.25/block"
    },
  ]

  constructor() {
    this.valueRandom()
   }

  ngOnInit(): void {
  }
  valueRandom(){
    this.tab[0].value = Math.floor((Math.random() * (200000000-500000000)) +200000000)
    this.tab[1].value = Math.floor((Math.random() * (399000000-500000000)) +399000000)
    setInterval(this.valueRandom, 3000)
  }
}
