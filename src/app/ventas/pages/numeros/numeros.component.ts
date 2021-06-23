import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  public ventasNetas: number = 46512343.25678;
  public porcentaje: number = 0.4889;

  constructor() { }

  ngOnInit(): void {
  }

}
