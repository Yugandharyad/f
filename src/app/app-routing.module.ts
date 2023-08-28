import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartbuttonComponent } from './startbutton/startbutton.component';
import { OffCanvapopupComponent } from './off-canvapopup/off-canvapopup.component';

const routes: Routes = [
  {path:'',component: StartbuttonComponent },
  {path:'off-canvouspoupoff',component:OffCanvapopupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
