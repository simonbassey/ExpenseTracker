import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../core/models/Expense';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Input() user: User;
  @Output() headerAction: EventEmitter<any> = new EventEmitter();
  @Output() sidebarToggled: EventEmitter<boolean> = new EventEmitter();
  sideBarOpened = true;

  constructor() { }

  ngOnInit() {
  }

  onHeaderAction(action: any): void {
    this.headerAction.emit(action);
  }

  toggleSideBar() {
    this.sideBarOpened = !this.sideBarOpened;
    this.sidebarToggled.emit(this.sideBarOpened);
  }
}
