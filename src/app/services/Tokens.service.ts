import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokensArr {
  constructor(private http: HttpClient) {}
  tokensChanged = new Subject();

  private tokens = [];

  setTokens(tokens: any) {
    this.tokens = tokens;
    this.tokensChanged.next(this.tokens.slice());
  }

  getTokens() {
    return this.tokens.slice();
  }
}
