import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  templateUrl: './image-view.component.html'
})
export class ImageViewComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.data);
      
    }, 1000);
  }

}
