import {Component, OnInit} from '@angular/core';
import {TableService} from './table.service';

@Component({
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableData;

  constructor( private tableService: TableService
  ) {
  }

  ngOnInit() {
    this.tableService.getData().subscribe((res: any) => {
      this.tableData = res;
    });
  }

  onSave() {
    this.tableService.saveData(this.tableData).subscribe((res: any) => {
      console.log(res);
      this.tableData = res;
    });
  }

  deleteRow(id) {
    this.tableData.result.splice(id, 1);
  }

  addRow() {
    this.tableData.result = [{deletable: true}].concat(this.tableData.result);
  }
}
