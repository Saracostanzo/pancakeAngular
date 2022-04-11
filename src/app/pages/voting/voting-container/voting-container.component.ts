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

  ngOnInit(): void {
    this.voting$ = this.service.getAllVoting();
  }

}
