import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/pages/info/services/auth.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'pancake-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
value=new Date();
result:any;
coinPrice:any;
volume24H:any;
l:any=[];
v:any=[];
chart:any=[]
chart1:any=[]
  constructor(private service: AuthService) {
    Chart.register(...registerables)
   }

  ngOnInit(): void {

    this.service.cryptoData().then((res)=>{
      this.result=res
      this.coinPrice= this.result.data.coins[0].sparkline;
      this.l= Math.round(this.coinPrice[0])
      this.volume24H= this.result.data.coins[1].sparkline;
      this.v=Math.round(this.volume24H[0])
      this.chart= new Chart('canvas',{
        type:'line',
        data:{
          labels:[ '05','25','11','29','17','05','25','11','29','18','06','26','14','31','17','05','25'],
          datasets: [{
            label: 'Liquidity',
            data: this.coinPrice,
            backgroundColor:'rgba(122, 110, 170,0.5)',
            borderColor: 'rgba(122, 110, 170)',
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
      this.chart1= new Chart('canvas1',{
        type:'line',
        data:{
          labels:[ '05','25','11','29','17','05','25','11','29','18','06','26','14','31','17','05','25'],
          datasets: [{
            label: 'Volume24H',
            data: this.volume24H,
            backgroundColor: 'rgba(31, 199, 212,0.5)',
            borderColor:'rgba(31, 199, 212)',
            fill:true,

          borderWidth: 2
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: false
          }
      }
  }
});
    })

  }
}
