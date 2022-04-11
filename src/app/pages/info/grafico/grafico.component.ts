import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { map } from 'highcharts';
import { AuthService } from '../services/auth.service';

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


    this.service.getAllToken().subscribe((res)=>{
      this.v=res[0].price;
      this.l=res[0].listedAt
      this.coinPrice= res.map(({ price }) => price)
      this.volume24H= res. map(({ listedAt }) => listedAt)
      this.chart= new Chart('canvas',{
        type:'line',
        data:{
          labels:this.coinPrice,
          datasets: [{
            label: 'Liquidity',
            data: this.volume24H,
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
