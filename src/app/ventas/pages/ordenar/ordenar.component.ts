import { Color, Heroe } from './../../interfaces/ventas.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  public cambiarMayuscula = true;
  public ordernar = '';

  public heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela : true,
      color : Color.azul
    },
    {
      nombre: 'Batman',
      vuela : false,
      color : Color.negro
    },
    {
      nombre: 'Robin',
      vuela : false,
      color : Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela : false,
      color : Color.rojo
    },
    {
      nombre: 'Linterna verde',
      vuela : true,
      color : Color.verde
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  cambiar(): void {
    this.cambiarMayuscula = !this.cambiarMayuscula;
  }

  ordernarPor( value: string ): void {
    this.ordernar = value;
  }

}
