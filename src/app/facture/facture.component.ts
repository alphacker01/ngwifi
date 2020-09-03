import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {

  a: string = "a property !"
  b = 1
  c = true;

  constructor() { }

  ngOnInit(): void {
  }

  getA(){
    return this.a
  }

  getB(){
    return this.b
  }

  onDisable(){
    this.c = false;
  }
}
