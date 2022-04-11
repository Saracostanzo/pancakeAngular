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
  e:any;
  f:any;
  chart:any=[]
  chart1:any=[]
  chart2:any=[]
ridim:boolean=true;
activeOre:boolean=true;
activeWeek:boolean=false;
activeMese:boolean=false;
activeAnno:boolean=false;
  grafico: boolean = true;
  grafico2:boolean=false;
  grafico1:boolean=true;
  bnb:boolean=false;
  scritta:boolean=true;
  scritta1:boolean=true;
  constructor(private service: TradeService) {
      Chart.register(...registerables)
     }

    ngOnInit(): void {
      this.service.getAllToken().subscribe((res)=>{
       this.e=res.map(({marketCap})=>marketCap)
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
console.log(this.e)
        this.chart1= new Chart('canvas1',{
          type:'line',
          data:{
            labels:this.e,
            datasets: [{
              label: '',
              data: this.volume24H + 5,
              backgroundColor: 'rgba(49, 208, 170,0.5)',
              borderColor:'rgb(49, 208, 170)',
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
  })
  this.chart2= new Chart('canvas2',{
    type:'line',
    data:{
      labels:[ '05','25','11','29','17','05','25','11','29','18','06','26','14','31','17','05','25'],
      datasets: [{
        label: '',
        data: this.volume24H,
        backgroundColor:'rgba(49, 208, 170,0.5)',
        borderColor: 'rgb(49, 208, 170)',
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
displayNone(){
  if(this.grafico===true){
    this.grafico=false;
  }else{
    this.grafico=true
  }
}
    changeWidth(){
      if(this.ridim===true){
        this.ridim=false;
      }else{
        this.ridim=true
      }
    }

    clickOra(){
      if(this.activeOre===false){
        this.grafico1=true;
        this.grafico2=false;
        this.activeOre=true
        this.activeAnno=false
        this.activeMese=false
        this.activeWeek=false
        this.scritta=true;
        this.bnb=false;

    }else{
      this.activeAnno=false
        this.activeMese=false
        this.activeWeek=false
    }
    }
    clickWeek(){
      if(this.activeWeek===false){
        this.grafico1=false;
        this.grafico2=true;
        this.activeWeek=true;
        this.activeOre=false;
        this.activeAnno=false;
        this.activeMese=false;
        this.scritta=true;
        this.bnb=false;
      }
    }
    clickMese(){
      if(this.activeMese===false){
        this.activeMese=true;
        this.activeOre=false;
        this.activeAnno=false;
        this.activeWeek=false;
        this.grafico1=true;
        this.grafico2=false;
        this.scritta=true;
        this.scritta1=true;
        this.bnb=false;
      }
    }
    clickAnno(){
      if(this.activeAnno===false){
        this.grafico1=false;
        this.grafico2=true;
        this.activeAnno=true;
        this.activeOre=false;
        this.activeWeek=false;
        this.activeMese=false;
        this.scritta=true;
        this.scritta1=true;
        this.bnb=false;
      }
    }
    bnbCake(){
if(this.bnb===false && this.scritta===true||this.bnb===false && this.scritta1===true){
  this.bnb=true;
  this.scritta=false;
  this.grafico1=false;
  this.grafico2=false;
  this.scritta1=true;
}else{
  if(this.bnb===true && this.scritta===false||this.bnb===true && this.scritta1===false){
    this.bnb=false;
    this.scritta=true;
    this.grafico1=true;
    this.grafico2=false;
    this.scritta1=true;
  }
}
}
cakeBnb(){
  if(this.bnb===false && this.scritta1===true||this.bnb===false && this.scritta===true){
    this.bnb=true;
    this.scritta1=false;
    this.grafico1=false;
    this.grafico2=false;
  }else{
    if(this.bnb===true && this.scritta1===false||this.bnb===true && this.scritta===false){
      this.bnb=false;
      this.scritta1=true;
      this.grafico1=true;
      this.grafico2=false;
    }
  }
}
    }



