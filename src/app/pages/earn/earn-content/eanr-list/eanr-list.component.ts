import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TokensArr } from 'src/app/pages/earn/services/Tokens.service';
import { map } from 'rxjs/operators';
import { HttpService } from 'src/app/pages/earn/services/HttpService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pancake-eanr-list',
  templateUrl: './eanr-list.component.html',
  styleUrls: ['./eanr-list.component.css'],
})
export class EanrListComponent implements OnInit {
  constructor(
    private tokenService: TokensArr,
    private httpService: HttpService
  ) {}

  subscription: Subscription | undefined;

  tokens: any = [];
  isOpen: boolean = false;

  @ViewChild('earnSubRow', { static: false }) earnSubRow!: ElementRef;
  @ViewChild('earnRow', { static: false }) earnRow!: ElementRef;

  selectedToken: any;

  ngOnInit(): void {
    this.subscription = this.tokenService.tokensChanged.subscribe((tokens) => {
      this.tokens = tokens;
    });
  }

  onSelect(token: any) {
    this.selectedToken = token;
    this.isOpen = !this.isOpen;
  }
}
