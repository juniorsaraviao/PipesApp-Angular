import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  public nombreLower    = 'junior';
  public nombreUpper    = 'JUNIOR';
  public nombreCompleto = 'jUnIoR SarAviA';

  public date: Date     = new Date(); // current date

  constructor() { }

  ngOnInit(): void {
  }

}
