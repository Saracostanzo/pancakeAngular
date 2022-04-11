import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Voting } from '../services/interface-voting';
import { VotingService } from '../services/voting.service.module';

@Component({
  selector: 'pancake-voting-community',
  templateUrl: './voting-community.component.html',
  styleUrls: ['./voting-community.component.css']
})
export class VotingCommunityComponent implements OnInit {
  voting$!: Observable<Voting[]>;
  constructor(private service: VotingService) { }

  ngOnInit(): void {
    this.voting$ = this.service.getAllVoting();
  }
}
