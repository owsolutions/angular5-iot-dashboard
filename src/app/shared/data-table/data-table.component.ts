import { Component, OnInit } from '@angular/core';
import { handleMockTableRequests } from './data-table-mock';
import { IPagination, createPagiantion } from './data-table-definitions';
declare var $: any;

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (typeof $ !== 'undefined') {
      this.drawDataTable();
    }
  }

  drawDataTable () {
    $('#example').DataTable({
      columns: [
          { title: 'Name' },
          { title: 'Position' },
          { title: 'Office' },
          { title: 'Extn.' },
          { title: 'Start date' },
          { title: 'Salary' }
      ],
      columnDefs: [
          {
              targets: [ 0, 1, 2 ],
              className: 'mdl-data-table__cell--non-numeric'
          }
      ],
      'serverSide': true,
      'fnServerData': async function ( sSource, aoData, fnCallback ) {
        fnCallback(await handleMockTableRequests(createPagiantion(aoData)));
      }
    });
  }
}
