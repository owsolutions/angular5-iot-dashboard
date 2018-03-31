import { Directive, HostListener, Input, ElementRef, ComponentFactoryResolver, ApplicationRef,
         Injector, EmbeddedViewRef } from '@angular/core';
import { NgxTooltipComponent } from './ngx-tooltip.component';
@Directive({
  /* tslint:disable */
  selector: '[Tooltip]'
})
export class TooltipDirective {
  @Input('Tooltip') Tooltip: string;
  public componentRef: any;

  constructor(private el: ElementRef,
              private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector) { }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.componentRef = this.componentFactoryResolver.resolveComponentFactory(NgxTooltipComponent).create(this.injector);
    this.appRef.attachView(this.componentRef.hostView);
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.componentRef.instance.tooltip = this.Tooltip;
    this.componentRef.instance.positions = this.el.nativeElement.getBoundingClientRect();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }

  @HostListener('click')
  onClick(): void {
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }
}
