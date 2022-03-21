import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/HttpService';

@Component({
  selector: 'pancake-earn-content',
  templateUrl: './earn-content.component.html',
  styleUrls: ['./earn-content.component.css'],
})
export class EarnContentComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  tokens = [];

  ngOnInit(): void {
    this.httpService.fetchTokens();
  }
}
