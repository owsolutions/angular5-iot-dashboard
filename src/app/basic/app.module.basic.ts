import { appRoutesGenerator as routes } from '@app/basic/app.routes.basic';
import { IndexComponent } from '@app/basic/index/index.component';

export default {
    declarations: [
        IndexComponent
    ],
    imports: [
        routes()
    ]
};
