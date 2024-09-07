import { Component, OnInit } from '@angular/core';
import { PageBase } from '../pageBase';
import { SqlFormatterClient } from '../../client/sqlFormatterClient';
import { SqlFormatterModel } from '../../models/sqlFormatterModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sql-formatter-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sql-formatter-page.component.html',
  styleUrl: './sql-formatter-page.component.scss'
})

export class SqlFormatterPageComponent extends PageBase implements OnInit {
  rawText?: string;
  formattedText?: string;

  constructor(
    private _client: SqlFormatterClient,
  ) {
    super();
  }

  onClickFormat() {
    this._client.format({ sql: this.rawText ?? "" }).subscribe({
      next: (res) => this.formattedText = res.sql,
      error: (error) => console.error(error),
    })
  }

  ngOnInit(): void {
    this.setTitle("Formatador de SQL");
    this.addDescription("Ferramenta para formatar seus scripts SQL.");
  }
}