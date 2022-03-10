import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TokensArr } from './Tokens.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private tokensService: TokensArr) {}

  fetchTokens() {
    this.http
      .get(
        'https://pancake-bca56-default-rtdb.europe-west1.firebasedatabase.app/tokens.json'
      )
      .pipe(
        map((tokens: any) => {
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
      .subscribe((tokens) => {
        this.tokensService.setTokens(tokens);
      });
  }
}
