import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@shared/core/definitions';

@Component({
  selector: 'app-unconnected-source',
  templateUrl: './unconnected-source.component.html',
  styleUrls: ['./unconnected-source.component.scss' , '../checkbox-switch.scss']
})
export class UnConnectedSourceComponent implements OnInit {

  @Input('dataSource') public dataSource: DataSource;

  ngOnInit() {
  }
  public value (source: DataSource) {
    return this.dataSource.value;
  }
}
