import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Voting } from '../services/interface-voting';
import { VotingService } from '../services/voting.service.module';

@Component({
  selector: 'pancake-voting-container',
  templateUrl: './voting-container.component.html',
  styleUrls: ['./voting-container.component.css']
})
export class VotingContainerComponent implements OnInit {
  voting$!: Observable<Voting[]>;
  constructor(private service: VotingService) { }
cardAdd:boolean=true;
cardCore:boolean=false;
cardCommunity:boolean=false;
  ngOnInit(): void {
    this.voting$ = this.service.getAllVoting();
  }
clickCore(){
  if(this.cardCore===false){
    this.cardCore=true;
    this.cardAdd=false;
    this.cardCommunity=false;
  }else{
    this.cardAdd=false;
    this.cardCommunity=false;
  }
}
clickAdd(){
if(this.cardAdd===false){
  this.cardAdd=true;
  this.cardCommunity=false;
  this.cardCore=false;
}else{
  this.cardCommunity=false;
  this.cardCore=false;
}
}
clickCommunity(){
  if(this.cardCommunity===false){
    this.cardCommunity=true;
    this.cardAdd=false;
    this.cardCore=false;
  }else{
    this.cardAdd=false;
    this.cardCore=false;
  }
  }
}
