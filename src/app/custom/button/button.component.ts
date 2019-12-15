import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-button',
  template: `
    <p>
      button works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
