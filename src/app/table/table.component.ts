import {Component, OnInit} from '@angular/core';
import {TableService} from './table.service';

@Component({
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableData: any;

  constructor( private tableService: TableService
  ) {
  }

  ngOnInit() {
    this.tableService.getData(this.tableData ? this.tableData.limit : 100,
      this.tableData ? this.tableData.offset : 0).subscribe((res: any) => {
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
