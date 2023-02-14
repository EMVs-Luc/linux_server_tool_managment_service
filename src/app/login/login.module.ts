import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginOverlayComponent } from './login-overlay/login-overlay.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BasicServicesModule} from "../basic-services/basic-services.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginOverlayComponent,
  ],
  imports: [
    BasicServicesModule,
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class LoginModule { }
