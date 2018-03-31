import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './tooltip.directive';
import { NgxTooltipComponent } from './ngx-tooltip.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NgxTooltipComponent,
    TooltipDirective
  ],
  providers: [],
  entryComponents: [NgxTooltipComponent],
  exports: [
    NgxTooltipComponent,
    TooltipDirective
  ]
})
export class NgxTooltipModule { }
