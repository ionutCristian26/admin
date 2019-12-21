import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbIconModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,

} from '@nebular/theme';
import {AlertModule, AlertService} from "ngx-alerts";
import { EditSupplierComponent } from './custom/edit-supplier/edit-supplier.component';
import {FormsModule} from "@angular/forms";

@NgModule({

    declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbIconModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),
    FormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
