import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from './../../../app.model';

@Component({
  selector: 'app-dropdown',
  template:  `<p-dropdown [options]="options"
    [(ngModel)]="selectedMenu" placeholder="{{placeholder}}" 
    optionLabel="{{label}}" [showClear]="showClear"
    (onChange)="this.menuChange.emit(this.selectedMenu);">
</p-dropdown>`,
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() options: Menu;
  @Input() selectedMenu: string;
  @Output() inputModelChange = new EventEmitter();
  @Output() menuChange = new EventEmitter();
  @Input() placeholder: string;
  @Input() label: string;
  @Input() showClear: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
