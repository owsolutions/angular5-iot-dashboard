import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from '../components/page-container/page-container.component';
import { ErrorMessageComponent } from '../components/error-message/error-message.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot(),
  ],
  declarations: [
    PageContainerComponent,
    ErrorMessageComponent,
  ],
  exports: [
    PageContainerComponent,
    ErrorMessageComponent,
  ],
  providers: [
    TranslateService
  ]
})
export class NgUikitModule { }
