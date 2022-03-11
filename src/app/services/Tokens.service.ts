import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokensArr {
  constructor(private http: HttpClient) {}
  tokensChanged = new Subject();
  stacked = false;
  private tokens = [];

  setTokens(tokens: any) {
    this.tokens = tokens;
    this.tokensChanged.next(this.tokens.slice());
  }

  getTokens() {
    return this.tokens.slice();
  }

  filterStaked() {
    let tokensToFilter = this.getTokens();
    if (!this.stacked) {
      this.tokensChanged.next(tokensToFilter);
    } else {
      let tokensFiltered = tokensToFilter.filter(
        (token: any) => token.multiplier < 2
      );
      this.tokensChanged.next(tokensFiltered);
    }
  }

  filterLive() {}
}
