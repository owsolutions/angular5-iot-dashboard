import { Component, OnInit, Input } from '@angular/core';
import { IPagination, createPagiantion } from './data-table-definitions';
import { getDataTable, ITableObservable } from './data-table.normalizer';

declare var $: any;

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input('schema') public schema = <ITableObservable>null;
  constructor() {
  }

  ngOnInit() {
    if (this.schema) {
      const structure = getDataTable(this.schema);
      const table = $('#example').DataTable(structure);
    }
  }

}
