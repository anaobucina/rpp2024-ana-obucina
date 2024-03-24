import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rpp-frontend';
  constructor(private scroller: ViewportScroller){}
  scroll(){
    this.scroller.scrollToAnchor("opis")
  }
  scroll1(){
    this.scroller.scrollToAnchor("autor")
  }
}
