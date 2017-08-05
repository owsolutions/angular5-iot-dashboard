import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy, OnChanges, EventEmitter, Output } from '@angular/core';
import { IDevice, IPin, ILocation, IWidget, AppState, IWidgetForm } from '../../shared/Definitions';
import { ActionsService } from '../../actions.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-helper-box',
  templateUrl: './helper-box.component.html',
  styleUrls: ['./helper-box.component.scss']
})
export class HelperBoxComponent implements OnInit, OnDestroy, OnChanges {

  @Input() public device = <IDevice>null;
  @Input() public pin = <IPin>null;
  @Output() onFocusLost: EventEmitter<any> = new EventEmitter();

  public locations: Array<ILocation>;

  public form: IWidgetForm = {
    name: '',
    location: ''
  };
  constructor (public chRef: ChangeDetectorRef, private store: Store<AppState>, private actions: ActionsService) {
    // Initialize private variables
  }

  ngOnInit() {
    this.store.select('locations').subscribe(collection => {
      this.locations = (collection as Array<ILocation>);
    });
  }

  ngOnDestroy () {
    this.chRef.detach();
  }


  async ngOnChanges(changes: any) {
    const widget = (await this.actions.findWidget(this.device, this.pin) as IWidget);
    if (!widget) {
      return this.resetForm();
    }
    this.form.name = widget.name;
    if (widget.location) {
      this.form.location = widget.location.id;
    }
  }

  createWidgetObject(): IWidget {
    return {
      device: this.device,
      pin: this.pin,
      name: this.form.name,
      location: this.locations.find(x => x.id === this.form.location)
    };
  }

  submitForm () {
    if (!this.device || !this.pin) {
      return void 0;
    }
    const args = this.createWidgetObject();
    this.actions.createWidgets(args);
  }


  describeDevice( device: IDevice) {
    return `This device has ${this.countInputPins(device)} inputs, and ${this.countOutputPins(device)} outputs.`;
  }

  countInputPins (device: IDevice) {
    return device.pins.filter(pin => pin.type === 'input').length;
  }

  countOutputPins (device: IDevice) {
    return device.pins.filter(pin => pin.type === 'output').length;
  }

  unfocus () {
    this.onFocusLost.emit();
  }

  resetForm () {
    this.form.name = '';
    this.form.location = '';
  }

  onPlaceChange (value) {
    this.form.location = value;
  }

  onWidgetNameInputChange (value) {
    this.form.name = value;
  }


}
