import {NgModule} from '@angular/core';
import {
    NbMenuModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbCardBodyComponent, NbInputModule, NbSelectModule,
} from '@nebular/theme';

import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';
import {BuyersComponent} from './buyers/buyers.component';
import {SuppliersComponent} from './suppliers/suppliers.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {EditBuyersComponent} from "../custom/edit-buyers/edit-buyers.component";
import {FormsModule} from "@angular/forms";
import {AlertModule} from "ngx-alerts";
import {EditSupplierComponent} from "../custom/edit-supplier/edit-supplier.component";

@NgModule({
    imports: [
        PagesRoutingModule,
        ThemeModule,
        NbMenuModule,
        MiscellaneousModule,
        Ng2SmartTableModule,
        NbIconModule,
        NbButtonModule,
        NbCardModule,
        NbInputModule,
        FormsModule,
        AlertModule,
        NbSelectModule,
    ],
    declarations: [
        PagesComponent,
        BuyersComponent,
        SuppliersComponent,
        EditBuyersComponent,
        EditSupplierComponent
    ],
    entryComponents: [EditBuyersComponent, EditSupplierComponent],
})
export class PagesModule {
}
