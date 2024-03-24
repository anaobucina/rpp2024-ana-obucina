import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeComponent implements OnInit {
  
  
  constructor(private scroller: ViewportScroller){}

scroll(){
  this.scroller.scrollToAnchor("opis")
}
scroll1(){
  this.scroller.scrollToAnchor("autor")
}
  ngOnInit(): void {
    
  }

}
