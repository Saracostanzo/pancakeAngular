import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokensArr {
  constructor(private http: HttpClient) {}

  fetchTokens() {
    return this.http.get<any>(
      'https://pancake-bca56-default-rtdb.europe-west1.firebasedatabase.app/tokens.json'
    );
  }

  // setTokens(tokens: any) {
  //   this.tokens = tokens;
  // }

  // logging() {
  //   console.log(this.tokens);
  // }

  query = '';
  live = false;
  stacked = false;
  sortOption = ['hot', 'apr', 'multiplier', 'earned', 'liquidity'];
  sort: string[] = [];
  sortBy: string = '';
}
