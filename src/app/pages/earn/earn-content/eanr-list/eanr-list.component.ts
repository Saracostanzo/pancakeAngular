import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TokensArr } from 'src/app/services/Tokens.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'pancake-eanr-list',
  templateUrl: './eanr-list.component.html',
  styleUrls: ['./eanr-list.component.css'],
})
export class EanrListComponent implements OnInit {
  constructor(private tokenService: TokensArr) {}

  tokens: any = [];
  isOpen: boolean = false;
  isAlreadyOpen = false;
  couldClose = false;
  @ViewChild('earnSubRow', { static: false }) earnSubRow!: ElementRef;
  @ViewChild('earnRow', { static: false }) earnRow!: ElementRef;

  selectedToken: any;

  ngOnInit(): void {
    this.tokenService
      .fetchTokens()
      .pipe(
        map((tokens) => {
          return tokens.map((tokens: any) => {
            return (tokens = {
              name: tokens.name,
              address: tokens.address,
              symbol: tokens.symbol,
              logo: tokens.logoURI,
              decimals: tokens.decimals,
              value: Math.floor(Math.random() * (1000000 - 1000) + 1000),
              multiplier: Math.floor(Math.random() * (40 - 0) + 0),
              hot: tokens.value * tokens.multiplier,
            });
          });
        })
      )
      .subscribe((tokens) => (this.tokens = tokens));
  }

  onSelect(token: any) {
    this.selectedToken = token;
    this.isOpen = !this.isOpen;
  }
}
