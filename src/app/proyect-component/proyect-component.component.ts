import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proyect-component',
  templateUrl: './proyect-component.component.html',
  styleUrls: ['./proyect-component.component.css']
})
export class ProyectComponentComponent implements OnInit {


  constructor() {

  }

  @Input() linkcustom: string | undefined;
  @Input() subtitulo: string | undefined;
  @Input() desc: string | undefined;
  @Input() dinamicClass: string | undefined;

  ngOnInit(): void {
  }

}
