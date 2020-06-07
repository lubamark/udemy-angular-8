import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, bounceOutUp } from 'ng-animate';


@Component({
  selector: 'app-animate',
  template: `
    <button (click)="visible = !visible">toggle</button>
    <hr>
    <div [@bounce] *ngIf="visible" class="rect"> </div>
  `,
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(bounce)),
      transition('* => void', useAnimation(bounceOutUp, { params: {
        timing: 2,
        delay: 1
      }}))
    ])
  ],
})
export class AnimateComponent implements OnInit {
  visible=true;

  constructor() { }

  ngOnInit() {
  }

}
