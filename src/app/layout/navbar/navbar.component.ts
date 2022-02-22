import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pancake-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
value=0;

  constructor() {
    this.valueRandom()

  }

  ngOnInit(): void {
  }

valueRandom(){
  this.value = Math.floor((Math.random() * (20000-10000)) +10000)
  setInterval(this.valueRandom, 3000)
}
}
