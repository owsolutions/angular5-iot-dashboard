import {ActionReducer, Action} from '@ngrx/store';
import UpdateOrPrepend from '../functions/UpdateOrPrepend';
import { IWidget } from '../shared/Definitions';

export function widgetsReducer (widgets = [], action: Action) {
    switch (action.type) {
    case 'UPDATE_WIDGET':
        const widget: IWidget = action.payload;

        let exists = false;
        // find widget by device and pin, not the name.
        widgets = widgets.map((T: IWidget) => {
            if (T.device.uniqueid === widget.device.uniqueid && T.pin.id === widget.pin.id) {
                exists = true;
                T.name = widget.name;
                console.log('Found');
            }
            return T;
        });

        if (!exists) {
            console.log('This is a new one!');
            widgets = widgets.concat(widget);
        }
    }
    return widgets;
}
