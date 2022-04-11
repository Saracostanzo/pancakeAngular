import { Component, OnInit } from '@angular/core';
import { TabellaSwitch } from '../interfacce home/interfaccia-tab-switch';
import { SectionTabSwitch } from '../interfacce home/interfaccia-title-tab-switch';

@Component({
  selector: 'pancake-tab-switch',
  templateUrl: './tab-switch.component.html',
  styleUrls: ['./tab-switch.component.css']
})
export class TabSwitchComponent implements OnInit {
title:SectionTabSwitch[]=[
{
  h2:"Top",
  span1:"Farms",
  span2:"Syrup Pools",
}
]
tab:TabellaSwitch[]=[
  {
    titleTab: "BCOIN-BNB",
    numberTab:"302.457%",
    subTab: "APR",
  },
  {
    titleTab: "KART-BNB",
    numberTab:"206.485%",
    subTab: "APR",
  },
  {
    titleTab: "ITAM-BNB LP",
    numberTab:"200.901%",
    subTab: "APR",
  },
  {
    titleTab: "CCAR-BNB LP",
    numberTab:"194.544%",
    subTab: "",
  },
  {
    titleTab: "GM-BNB LP",
    numberTab:"186.400%",
    subTab: "APR",
  },
  {
    titleTab: "Stake CAKE - Earn BCOIN",
    numberTab:"108.273%",
    subTab: "APR",
  },
  {
    titleTab: "IFO CAKE",
    numberTab:"65.209%",
    subTab: "APR",
  },
  {
    titleTab: "Auto CAKE",
    numberTab:"63.961%",
    subTab: "APR",
  },
  {
    titleTab: "Stake CAKE - Earn DPT",
    numberTab:"55.134%",
    subTab: "APR",
  },
  {
    titleTab: "Stake CAKE - Earn IDIA",
    numberTab:"55.081%",
    subTab: "APR",
  }

]
 buttonElFarm:any = document.getElementById("button-switch");
farmEL:any = document.querySelectorAll(".home-container-section-text-tab-farms");
poolEL:any = document.querySelectorAll(".home-container-section-text-tab-syrup-pools");
spanFarm: any = document.getElementById("farms");
 spanPools: any = document.getElementById("pools");

  constructor() { }

  ngOnInit(): void {
  }

}
