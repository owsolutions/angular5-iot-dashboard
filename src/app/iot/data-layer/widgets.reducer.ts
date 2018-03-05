import { Action } from '@app/core/definitions';
import { IWidget } from '@app/iot/definitions';

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
            }
            return T;
        });

        if (!exists) {
            widgets = widgets.concat(widget);
        }
    }
    return widgets;
}
