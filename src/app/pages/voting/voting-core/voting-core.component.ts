import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Voting } from '../services/interface-voting';
import { VotingService } from '../services/voting.service.module';

@Component({
  selector: 'pancake-voting-core',
  templateUrl: './voting-core.component.html',
  styleUrls: ['./voting-core.component.css']
})
export class VotingCoreComponent implements OnInit {
  voting$!: Observable<Voting[]>;


 constructor(private service: VotingService) { }

  ngOnInit(): void {
    this.voting$ = this.service.getAllVoting();

    }
  }
