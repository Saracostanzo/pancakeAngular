import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Tokens } from '../services/interface-token';

@Component({
  selector: 'pancake-info.all-tokens',
  templateUrl: './info-all-tokens.component.html',
  styleUrls: ['./info-all-tokens.component.css', ]
})
export class InfoAllTokensComponent implements OnInit {
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
        }

