import { Component, OnInit } from '@angular/core';
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


 constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.service.getAllToken().subscribe((res)=>this.iters= res)
    this.totalLength= this.iters.length;

    }
        }
