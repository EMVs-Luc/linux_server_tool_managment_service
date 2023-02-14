import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverlayComponent} from "./overlay/overlay.component";

const routes: Routes = [
  {path:'', component:OverlayComponent},
  {path:'tools',  loadChildren:() =>
      import ('./tools/tools.module').then((m) => m.ToolsModule), outlet:'tools'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareRoutingModule {

}
