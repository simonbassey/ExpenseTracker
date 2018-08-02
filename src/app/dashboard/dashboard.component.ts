import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Expense, User } from '../core/models/Expense';
import { ExpenseService } from '../core/services/expense.service';
import { MatDialog, MatSnackBar, PageEvent } from '@angular/material';
import { NewuserDialogComponent } from '../shared/dialog/newuser-dialog/newuser-dialog.component';
import { AdduserDialogComponent } from '../shared/dialog/adduser-dialog/adduser-dialog.component';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  public expenseList: Array<Expense> = [];
  public usersList: Array<User> = [];
  public progressColor: string;
  public loaderIsActive = false;
  public user: User = {} as User;
  public pageSize = 5;
  public expenseListBackup: Array<Expense> = [];
  public viewOptions: Array<ViewOption> = [];
  public selectedViewOption: ViewOption = null;
  public tableSearchKey: string;
  constructor(
    private _expenseService: ExpenseService,
    private modalDialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.progressColor = 'primary';
    this.initViewOptions();
  }

  ngOnInit(): void {
    const userObj = localStorage.getItem('user');
    if (!userObj) {
      return;
    }
    this.user = JSON.parse(userObj) as User;
    this.loadExpenseList(this.user.email);
  }

  ngAfterViewInit(): void {
    if (!this.user.email) {
      // this.initAddUserModal(true);
    }
  }

  loadExpenseList(userId: string) {
    this.loaderIsActive = true;
    this._expenseService.GetExpensesForUser(userId).then(
      (response) => {
        this.expenseListBackup = response;
        this.expenseList = this.expenseListBackup.slice(0, this.pageSize);
        this.loaderIsActive = false;
      },
      (error) => {
        this.progressColor = 'warn';
        console.log('request to fetch users list failed -> ', error);
        this.loaderIsActive = false;
      }
    );
  }

  refreshExpenseList() {
    this.loadExpenseList(this.user.email);
  }

  toNumber(value: any): Number {
    return Number(value);
  }

  initExpenseAddmodal(): void {
    if (!this.user || !this.user.email) {
      const unAuthorizedSnackBarRef = this.snackBar.open(
        'You are not signed In',
        'Sign In', {
          verticalPosition: 'bottom',
          horizontalPosition: 'right',
          duration: 5000
        }
      );
      unAuthorizedSnackBarRef.onAction().subscribe(
        () => {
          this.initAddUserModal(true);
        }
      );
      return;
    }
    const dialogRef = this.modalDialog.open( NewuserDialogComponent,
      {
        height: '400px',
        width: '40%'
      });
    dialogRef.afterClosed().subscribe(
      (result: Expense) => {
        if (result) {
          this.expenseList.push(result);
        }
      }
    );
  }

  initAddUserModal(dismissible: boolean = false): void {
    const newUserModal = this.modalDialog.open(AdduserDialogComponent, {
      height: '350px',
      width: '25%',
      hasBackdrop: true,
      disableClose: dismissible
    });
    newUserModal.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.user = result;
          this.loadExpenseList(this.user.email);
        }
      }
    );
  }

  logOutUser(): void {
    this.user = {} as User;
    this.expenseList = [];
    localStorage.removeItem('user');
    this.initAddUserModal(true);
  }


  onSideBarToggled(evt) {

  }
  /*
  * Pagination centric logic
  */
  onRequestedPageChanged(pageChangedEvent: PageEvent) {
    const x = pageChangedEvent.pageSize;
    const start = pageChangedEvent.pageIndex * pageChangedEvent.pageSize;
    const end = start + pageChangedEvent.pageSize;
    this.expenseList = this.expenseListBackup.slice(start, end);
  }

  totalExpenses(): Number {
    let total = 0;
    this.expenseListBackup.forEach(exp => total += Number(exp.amount));
    return total;
  }


  initViewOptions() {
    const dateNow = new Date();
    this.viewOptions = [
      {'label': 'Today', 'display': `${moment().format('MMM Do YY')} - ${moment().format('MMM Do YY')}`},
      {
        'label': 'Yesterday',
        'display': `${moment().subtract(1, 'days').format('MMM Do YY')} - ${moment().subtract(1, 'days').format('MMM Do YY')}`
      },
      {
        'label' : 'Last 7 days',
        'display': `${moment().subtract(8, 'days').format('MMM Do YY')} - ${moment().subtract(1, 'days').format('MMM Do YY')}`
      },
      {
        'label' : 'Last 30 days',
        'display': `${moment().subtract(31, 'days').format('MMM Do YY')} - ${moment().subtract(1, 'days').format('MMM Do YY')}`
      }
    ];

    this.selectedViewOption = this.viewOptions[0];
  }
}


export interface ViewOption {
  label: string;
  display: string;
  optionValue?: string;
}
