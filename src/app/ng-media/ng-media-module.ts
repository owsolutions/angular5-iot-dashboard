import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderService } from './services/uploader.service';
import { DetailPanelService } from './services/detail-panel.service';
import { NgMediaComponent } from './components/ng-media/ng-media.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { UploadComponent } from './components/upload/upload.component';
import { MediaToolbarComponent } from './components/media-toolbar/media-toolbar.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { MediaDetailsComponent } from './components/media-details/media-details.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';
import { ImageEditorComponent } from './components/image-editor/image-editor.component';
import { UtilsService } from './services/utils.service';
import { RequestsService } from './services/requests.service';
import { NgMediaSelectorComponent } from './components/ng-media-selector/ng-media-selector.component';
import { NgMediaService } from './services/public.service';
import { StoreService } from './services/store.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    NgMediaComponent,
    CanvasComponent,
    UploadComponent,
    MediaToolbarComponent,
    GridViewComponent,
    MediaDetailsComponent,
    SpinnerComponent,
    ImageCropperComponent,
    ImageEditorComponent,
    NgMediaSelectorComponent
  ],
  entryComponents: [
    MediaDetailsComponent,
    NgMediaSelectorComponent
  ],
  providers: [
    UploaderService,
    NgMediaService,
    HttpClient,
    DetailPanelService,
    UtilsService,
    StoreService,
    RequestsService
  ],
  exports: [
    NgMediaComponent,
    NgMediaSelectorComponent
  ]
})
export class NgMediaModule { }
