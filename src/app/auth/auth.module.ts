import { NgModule } from '@angular/core';
import {NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import {LoginComponent} from "./login/login.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {NbAuthComponent, NbAuthModule} from "@nebular/auth";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LogoutComponent } from './logout/logout.component';
import {AlertModule} from "ngx-alerts";

@NgModule({
    imports: [
        NbCardModule,
        NbTreeGridModule,
        NbIconModule,
        NbInputModule,
        ThemeModule,
        AuthRoutingModule,
        NbAuthModule,
        FormsModule,
        NbButtonModule,
        ReactiveFormsModule,
        AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})
    ],
    declarations: [
        LoginComponent,
        LogoutComponent,
    ],
})
export class AuthModule { }
