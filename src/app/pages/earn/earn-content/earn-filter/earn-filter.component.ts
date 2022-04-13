import { Component, OnInit } from '@angular/core';
import { TokensArr } from 'src/app/services/Tokens.service';

@Component({
  selector: 'pancake-earn-filter',
  templateUrl: './earn-filter.component.html',
  styleUrls: ['./earn-filter.component.css'],
})
export class EarnFilterComponent implements OnInit {
  constructor(private tokenService: TokensArr) {}
  query: string = '';
  staked: boolean = false;
  live: boolean = true;
  ngOnInit(): void {}

  onStacked() {
    this.tokenService.stacked = !this.tokenService.stacked;
    this.tokenService.filterStaked();
    console.log(this.tokenService.stacked);
    this.staked = !this.staked;
    console.log('cambia posizione', this.staked);
  }

  onLive() {
    this.tokenService.live = !this.tokenService.live;
    this.tokenService.filterLive();
    this.live = !this.live;
  }

  onSearch(e: any) {
    this.query = e.target.value;
    console.log(this.query);
    this.tokenService.filterSearch(this.query);
  }
}
