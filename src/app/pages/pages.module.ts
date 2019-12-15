import { NgModule } from '@angular/core';
import {
  NbMenuModule,
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbCardBodyComponent,
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { BuyersComponent } from './buyers/buyers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

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
  ],
  declarations: [
    PagesComponent,
    BuyersComponent,
    SuppliersComponent,
  ],
})
export class PagesModule {
}
