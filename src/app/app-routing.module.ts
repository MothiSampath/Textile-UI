import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeaverMainComponent } from './weaver-main/weaver-main.component';
import { WeaverAddComponent } from './weaver-add/weaver-add.component';




const appRoutes: Routes = [
  { path: 'weaver-main', component: WeaverMainComponent },
  { path: 'weaver-add' , component: WeaverAddComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
