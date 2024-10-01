import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'csv2-json-page',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf,
  ],
  templateUrl: './csv2-json-page.component.html',
  styleUrl: './csv2-json-page.component.scss'
})

export class Csv2JsonPageComponent {
  convertNumber: boolean = false;
  csvContent: string = "";
  jsonContent: string = "";
  breaker: string = ";";
  columns: string[] = [];

  private getColumns() {
    let contentList = this.csvContent.split("\n");
    this.columns = contentList[0].replaceAll(" ", "_").split(";");

    for (let i = 0; i < this.columns.length; i++) {
      if (this.columns[i].isNotEmpty()) {
        continue;
      }

      this.columns = contentList[1].replaceAll(" ", "_").replaceAll("\r", "").split(";");
      break;
    }
  }

  onChangeFileInput(event: any): void {
    var file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.csvContent = fileReader.result?.toString() ?? "";
      this.getColumns();
    };

    // fileReader.readAsArrayBuffer(file);
    fileReader.readAsText(file);
  }

  onChangeBreaker(e: Event): void {
    this.breaker = (e.target as HTMLInputElement).value;
  }

  onClickConvert(): void {
    let contentList = this.csvContent.split("\n");
    let list: { [key: string]: any }[] = [];
    let columns = contentList[0].split(";");

    for (let i = 0; i < contentList.length; i++) {
      let data = contentList[i].replace(" ", "_").split(";");
      let item: { [key: string]: any } = {};

      if (i === 0)
        continue;

      for (let j = 0; j < data.length; j++) {
        item[columns[j].replace("\"", "").replace("\"", "")] = data[j].replace("\"", "").replace("\"", "");
        let column = this.columns[j].replaceAll("\"", "").replaceAll("\"", "").replaceAll(" ", "_").replaceAll("\r", "");
        let info = data[j].replaceAll("\"", "").replaceAll("\r", "");

        if (this.convertNumber && info.isNumber()) {
          item[column] = Number(info);
        } else {
          item[column] = info;
        }
      }

      list.push(item);
    }

    this.jsonContent = JSON.stringify(list, null, 4);
  }
}