import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  public eventos: any = [
    {
      Tema: 'Angular 11',
      Local: 'Rio de Janeiro',
    },
    {
      Tema: '.NET',
      Local: 'São Paulo',
    },
    {
      Tema: 'Angular e suas novidades',
      Local: 'Belo Horizonte',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
