import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ExpenseService } from './core/services/expense.service';
import { UserService } from './core/services/user.service';
import { Expense, User } from './core/models/Expense';
import { MatDialog, MatSnackBar } from '@angular/material';
import { NewuserDialogComponent } from './shared/dialog/newuser-dialog/newuser-dialog.component';
import { AdduserDialogComponent } from './shared/dialog/adduser-dialog/adduser-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  public expenseList: Array<Expense> = [];
  public usersList: Array<User> = [];
  public progressColor: string;
  public loaderIsActive = false;
  public user: User = {} as User;
  constructor(
    private _expenseService: ExpenseService,
    private _userService: UserService,
    private modalDialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.progressColor = 'primary';
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
      this.initAddUserModal(true);
    }
  }

  loadUserList() {
    this._userService.GetUsers().then(
      (response) => {
        console.log('users => ', response);
      },
      (error) => {
        console.log('request to fetch users list failed -> ', error);
      }
    );
  }

  loadExpenseList(userId: string) {
    this.loaderIsActive = true;
    this._expenseService.GetExpensesForUser(userId).then(
      (response) => {
        this.expenseList = response;
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
}
