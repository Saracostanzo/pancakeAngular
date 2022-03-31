import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Tokens } from '../services/interface-token';

@Component({
  selector: 'pancake-info-all-pools',
  templateUrl: './info-all-pools.component.html',
  styleUrls: ['./info-all-pools.component.css']
})
export class InfoAllPoolsComponent implements OnInit {

  iters:any;
totalLength!:number;
page:number=1;


 constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.getAllToken().subscribe((res)=>this.iters= res)
    this.totalLength= this.iters.length;

    }
}
