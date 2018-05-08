import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { MediaDetailsComponent } from './../components/media-details/media-details.component';
import { IImage } from '../interfaces/definitions';
import { Storage } from './storage';

@Injectable()
export class DetailPanelService {

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  showDetaile(item: IImage, storage: Storage = null) {
    console.log(storage);
    const componentRef = this.resolver.resolveComponentFactory(MediaDetailsComponent);
    const panel = componentRef.create(this.injector);
    this.appRef.attachView(panel.hostView);
    const domElm = (panel.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElm);
    panel.instance.image = item;
    if ( ! storage ) {
      panel.instance.storage = new Storage();
    } else {
      panel.instance.storage = storage;
    }
    panel.instance.appRef = this.appRef;
    panel.instance._ref = panel;
  }
}
