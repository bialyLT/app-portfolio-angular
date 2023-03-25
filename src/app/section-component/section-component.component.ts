import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-component',
  templateUrl: './section-component.component.html',
  styleUrls: ['./section-component.component.css']
})
export class SectionComponentComponent implements OnInit {

  constructor() { }
  
  @Input() titulo: string | undefined;
  @Input() custom: string | undefined;
  @Input() desc: string | undefined;

  ngOnInit(): void {
  }

}
