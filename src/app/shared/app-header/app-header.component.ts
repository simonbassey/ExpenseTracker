import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../core/models/Expense';
import { DataShareService } from '../../core/services/datashare.service';

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

  constructor(private dataService: DataShareService) { }

  ngOnInit() {
  }

  onHeaderAction(action: any): void {
    this.headerAction.emit(action);
  }

  toggleSideBar() {
    this.sideBarOpened = !this.sideBarOpened;
    this.sidebarToggled.emit(this.sideBarOpened);
    this.dataService.sendData(this.sideBarOpened);
  }
}
