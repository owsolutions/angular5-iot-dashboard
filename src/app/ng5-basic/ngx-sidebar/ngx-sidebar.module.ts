import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSidebarComponent } from './ngx-sidebar.component';

import {
  RouterModule
} from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NgxSidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    TranslateModule.forRoot()
  ],
  providers: [],
  exports: [
    NgxSidebarComponent
  ]
})
export class NgxSidebarModule { }


export interface NgxMenuItem {
  link?: string;
  icon?: string;
  title: string;
  active?: boolean;
  children?: Array<NgxMenuItem>;
}
