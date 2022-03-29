import { Component, OnInit } from '@angular/core';
import { TokensArr } from 'src/app/pages/earn/services/Tokens.service';

@Component({
  selector: 'pancake-earn-filter',
  templateUrl: './earn-filter.component.html',
  styleUrls: ['./earn-filter.component.css'],
})
export class EarnFilterComponent implements OnInit {
  constructor(private tokenService: TokensArr) {}

  ngOnInit(): void {}

  onStacked() {
    this.tokenService.stacked = !this.tokenService.stacked;
    this.tokenService.filterStaked();
    console.log(this.tokenService.stacked);
  }
}
