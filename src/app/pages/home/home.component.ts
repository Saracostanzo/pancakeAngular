import { Component, OnInit } from '@angular/core';
import { SectionButton } from './interfacce home/interfaccia-sections-buttons';

@Component({
  selector: 'pancake-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   objs:SectionButton[] = [
    {
    h1:"The moon is made of pancakes",
     h5:"Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.",
     buttons:"Connect Wallet",
     a:"Trade Now"
    },
    {
   h1:"anything. No registration, no hassle",
   span:"Trade",
   h5:"Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.",
   buttons:"Trade Now",
   a:"Learn"
  },
  {
    h1:"passive income with crypto.",
    span:"Earn",
    h5:"PancakeSwap makes it easy to make your crypto work for you.",
    buttons:"Explore",
    a:"Learn"
  },
  {
    h1:"makes our world go round.",
   span:"CAKE",
   h5:"CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it,farm it, spend it, stake it. heck, you can even vote with it!",
   buttons:"Buy CAKE",
   a:"Learn"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
