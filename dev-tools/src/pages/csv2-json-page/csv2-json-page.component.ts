import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'csv2-json-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './csv2-json-page.component.html',
  styleUrl: './csv2-json-page.component.scss'
})

export class Csv2JsonPageComponent {
  csvContent: string = "";
  jsonContent: string = "";

  onChangeFileInput(event: any): void {
    var file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.csvContent = fileReader.result?.toString() ?? "";
    };

    // fileReader.readAsArrayBuffer(file);
    fileReader.readAsText(file);
  }

  onClickConvert(): void {
    let contentList = this.csvContent.split("\n");
    let list: { [key: string]: any }[] = [];
    let columns = contentList[0].split(";");

    for (let i = 0; i < contentList.length; i++) {
      let data = contentList[i].split(";");
      let item: { [key: string]: any } = {};

      if (i === 0)
        continue;

      for (let j = 0; j < data.length; j++) {
        item[columns[j].replace("\"", "").replace("\"", "")] = data[j].replace("\"", "").replace("\"", "");
      }

      list.push(item);
    }

    this.jsonContent = JSON.stringify(list, null, 4);
  }
}