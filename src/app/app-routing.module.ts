import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeaverMainComponent } from './weaver-main/weaver-main.component';




const appRoutes: Routes = [
  { path: 'weaver-main', component: WeaverMainComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
