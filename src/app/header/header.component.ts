import { Component, ViewChild } from '@angular/core';
import { WeaverMainComponent } from '../weaver-main/weaver-main.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() {
    console.log("head compoinent")
   }


}
