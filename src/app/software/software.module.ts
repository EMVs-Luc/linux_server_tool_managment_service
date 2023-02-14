import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareRoutingModule } from './software-routing.module';
import { OverlayComponent } from './overlay/overlay.component';
import { NavibarComponent } from './navibar/navibar.component';


@NgModule({
  declarations: [
    OverlayComponent,
    NavibarComponent
  ],
  imports: [
    CommonModule,
    SoftwareRoutingModule
  ]
})
export class SoftwareModule { }
