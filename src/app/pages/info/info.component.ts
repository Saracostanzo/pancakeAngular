import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/pages/info/services/auth.service';
import { Tokens } from './services/interface-token';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pancake-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  iters:any;
totalLength!:number;
page:number=1;
val!:string;
filter1!:string;
filter:any
filter2:any
 constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.getAllToken().subscribe((res)=>{this.iters= res, this.filter=res, this.filter2=res})
    this.totalLength= this.iters.length;

    }
    addNewValue(form: NgForm) {
      this.val=form.value.filter;
      console.log(this.val)
      this.val.toString()
      if(this.val!=="" && this.val!==" "){
      this.filter2=this.iters.filter((iter:any)=> iter.name.includes(this.val))
      console.log(this.iters)
      }else
      this.service.getAllToken().subscribe((res)=>this.filter2= res)

    }
    select(form: NgForm) {
      console.log(this.filter)
      this.filter1=form.value.proposals;
      if(this.filter1!=="All"){
      this.filter=this.iters.filter((iter:any)=> iter.filter===this.filter1)

      }else this.service.getAllToken().subscribe((res)=>this.filter= res)
    }
  }

