import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokensArr {
  constructor(private http: HttpClient) {}
  tokensChanged = new Subject();
  filteredBySearch = [];
  stacked = false;
  live = false;
  private tokens = [];

  setTokens(tokens: any) {
    this.tokens = tokens;
    this.tokensChanged.next(this.tokens.slice());
  }

  getTokens() {
    return this.tokens.slice();
  }

  filterStaked() {
    let tokensToFilter = this.filteredBySearch;
    if (!this.stacked) {
      this.tokensChanged.next(tokensToFilter);
    } else {
      let tokensFiltered = tokensToFilter.filter(
        (token: any) => token.multiplier < 20
      );
      this.tokensChanged.next(tokensFiltered);
    }
  }

  filterLive() {
    let tokensToFilter = this.filteredBySearch;
    if (!this.live) {
      this.tokensChanged.next(tokensToFilter);
    } else {
      let tokensFiltered = tokensToFilter.filter(
        (token: any) => token.decimals < 16
      );
      this.tokensChanged.next(tokensFiltered);
    }
  }

  filterSearch(str: any) {
    let tokensToFilter = this.getTokens();
    this.filteredBySearch = tokensToFilter.filter(
      (token: any) => token.name.includes(str) || token.symbol.includes(str)
    );
    this.tokensChanged.next(this.filteredBySearch);
    console.log('tokenFilter', str, tokensToFilter);
  }
}
