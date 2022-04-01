import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { TradeService } from '../services/trade.service.module';

@Component({
  selector: 'pancake-trade-home-swap',
  templateUrl: './trade-home-swap.component.html',
  styleUrls: ['./trade-home-swap.component.css']
})
export class TradeHomeSwapComponent implements OnInit {
  value=new Date();
  result:any;
  coinPrice:any;
  volume24H:any;
  l:any=[];
  v:any=[];
  chart:any=[]
  chart1:any=[]

  constructor(private service: TradeService) {
      Chart.register(...registerables)
     }

    ngOnInit(): void {


      this.service.getAllToken().subscribe((res)=>{
        this.v=res[3].sparkline[0];
        this.l=res[4].change
        this.coinPrice= res.map(({ price }) => price)
        this.volume24H= res. map(({ listedAt }) => listedAt)
        this.chart= new Chart('canvas',{
          type:'line',
          data:{
            labels:this.coinPrice,
            datasets: [{
              label: '',
              data: this.volume24H,
              backgroundColor:'rgba(237, 75, 158,0.5)',
              borderColor: 'rgb(237, 75, 158)',
              fill: true,

            borderWidth: 2
            }]
          },
          options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            },
        }
        })
      })

    }
  }
