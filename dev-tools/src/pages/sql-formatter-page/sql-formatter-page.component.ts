import { Component, OnInit } from '@angular/core';
import { PageBase } from '../pageBase';

@Component({
  selector: 'sql-formatter-page',
  standalone: true,
  imports: [],
  templateUrl: './sql-formatter-page.component.html',
  styleUrl: './sql-formatter-page.component.scss'
})

export class SqlFormatterPageComponent extends PageBase implements OnInit {
  ngOnInit(): void {
    this.setTitle("Formatador de SQL");
    this.addDescription("Ferramenta para formatar seus scripts SQL.");
  }
}