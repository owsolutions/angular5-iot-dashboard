import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from '../components/page-container/page-container.component';
import { ErrorMessageComponent } from '../components/error-message/error-message.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UiIconBoxComponent } from '@app/uikit/ui-icon-box/ui-icon-box.component';
import { UiPanelBoxComponent } from '@app/uikit/ui-panel-box/ui-panel-box.component';
import { UiSmallBoxComponent } from '@app/uikit/ui-small-box/ui-small-box.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot(),
    RouterModule.forChild([]),
  ],
  declarations: [
    PageContainerComponent,
    ErrorMessageComponent,
    UiIconBoxComponent,
    UiPanelBoxComponent,
    UiSmallBoxComponent,
  ],
  exports: [
    PageContainerComponent,
    ErrorMessageComponent,
    UiIconBoxComponent,
    UiPanelBoxComponent,
    UiSmallBoxComponent,
  ],
  providers: [
    TranslateService
  ]
})
export class NgUikitModule { }
