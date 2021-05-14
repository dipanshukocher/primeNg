import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<p-button [label]="labelName" badge="{{badge}}" icon="{{icon}}" class="{{class}}"></p-button>',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() labelName: string;
  @Input() badge: string;
  @Input() icon: string;
  @Input() class: string;
  constructor() { }

  ngOnInit(): void {
  }

}
