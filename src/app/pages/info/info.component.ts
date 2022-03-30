import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/pages/info/services/auth.service';
import { Tokens } from './services/interface-token';

@Component({
  selector: 'pancake-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  tokens$!: Observable<Tokens[]>;


transaction:any=[
  {
add:"Add",
swaps:"Swaps",
removes:"Removes"
  }
]

 constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.tokens$ = this.service.getAllToken()
    }
  }

