import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/pages/info/services/auth.service';
import { Tokens } from './services/interface-token';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'pancake-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  iters:any;
totalLength!:number;
page:number=1;


 constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.getAllToken().subscribe((res)=>this.iters= res)
    this.totalLength= this.iters.length;

    }
  }

