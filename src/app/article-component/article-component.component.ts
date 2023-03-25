import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-component',
  templateUrl: './article-component.component.html',
  styleUrls: ['./article-component.component.css']
})
export class ArticleComponentComponent implements OnInit {

  constructor() { }
  @Input() titulo: string | undefined;
  @Input() desc: string | undefined;
  @Input() imagen: string | undefined;
  @Input() altCustom: string | undefined;


  ngOnInit(): void {
  }

}
