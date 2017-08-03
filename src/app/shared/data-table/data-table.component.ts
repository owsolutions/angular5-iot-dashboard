import { Component, OnInit, Input } from '@angular/core';
import { handleMockTableRequests } from './data-table-mock';
import { IPagination, createPagiantion } from './data-table-definitions';
import { PaginationRequestService } from '../../pagination.service';
import { getDataTable, ITableObservable } from './data-table.normalizer';

declare var $: any;

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input('schema') public schema = <ITableObservable>null;
  constructor(private requests: PaginationRequestService) {

  }

  ngOnInit() {
    if (this.schema) {
      const paginator = (pagination) => this.requests.Paginate(pagination, this.schema.endPoint);
      const structure = getDataTable(paginator, this.schema);
      const table = $('#example').DataTable(structure);
    }
  }

}
