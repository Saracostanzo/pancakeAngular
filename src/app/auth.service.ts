import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';


// const apiKey="coinranking78e86ba84b6bf9e0068eaaa64860cb4b919cbdf0ea9655c2";
const apiKey="29REJ5VVXHPZCA21JGT4QNY7T6I86C7MUT"
const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'X-My-costum-Header': `${apiKey}`,
    'Access-Control-Allow-Origin':'*'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl ='https://api.coinranking.com/v2/coins';
private proxyUrl='https://cors-anywhere.herokuapp.com/'
  constructor(private http: HttpClient) { }

cryptoData(){
  const url=`${this.proxyUrl}${this.baseUrl}`
  return this.http.get(url,httpOptions).toPromise().then((data)=>{
    return data
  })
}
}
