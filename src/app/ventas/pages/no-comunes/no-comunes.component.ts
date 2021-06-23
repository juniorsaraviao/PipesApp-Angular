import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  public nombre = 'Junior';
  public genero = 'masculino';

  public invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  };

  // i18nPlural
  public clientes: string[] = ['Maria', 'Pedro', 'Fernando'];
  public clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  };

  // KeyValue Pipe
  public persona = {
    nombre   : 'Junior',
    edad     : '25',
    direccion: 'Av. Peru 222'
  };

  // Json Pipe
  public heroes = [
    {
      nombre: 'Superman',
      vuela : true
    },
    {
      nombre: 'Robin',
      vuela : false
    },
    {
      nombre: 'Aquaman',
      vuela : false
    }
  ];

  // Async Pipe
  public miObservable = interval(1000); // emite los numeros: 0,1,2,...
  public miPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve( 'Tenemos la promesa!' );
    }, 3500 );
  } );


  constructor() { }

  ngOnInit(): void { }

  cambiarCliente(): void {
    this.nombre = this.nombre === 'Junior' ? 'María' : 'Junior';
    this.genero = this.genero === 'masculino' ? 'femenino' : 'masculino';
  }

  borrarCliente(): void {
    this.clientes.splice(0, 1);
  }

}
