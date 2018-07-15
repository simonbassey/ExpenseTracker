import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ExpenseService } from '../../../core/services/expense.service';
import { User } from '../../../core/models/Expense';

@Component({
  selector: 'app-newuser-dialog',
  templateUrl: './newuser-dialog.component.html',
  styleUrls: ['./newuser-dialog.component.css']
})
export class NewuserDialogComponent implements OnInit {

  public loaderIsActive = false;
  public progressColor: string;
  public expensePayload = {
    title: '',
    amount: '',
    description: '',
    expenseDate: '',
    userId: ''
  };
  constructor(private dialogInstance: MatDialogRef<NewuserDialogComponent>,
    private _expenseService: ExpenseService,
    private snackBarInstance: MatSnackBar
  ) {
    this.progressColor = 'primary';
  }

  ngOnInit() {
    const userObj = localStorage.getItem('user');
    if (userObj) {
      const user = JSON.parse(userObj) as User;
      this.expensePayload.userId = user.userId;
    }
  }

  close() {
    this.dialogInstance.close();
  }

  saveExpense(): void {
    this.loaderIsActive = true;
    this._expenseService.SaveExpense(this.expensePayload).then(
      (response) => {
        this.loaderIsActive = false;
        this.snackBarInstance.open('Expense record saved', '', {duration: 1000});
        this.dialogInstance.close(response);
      },
      (error) => {
        this.loaderIsActive = false;
        this.snackBarInstance.open('Could not save record. please try again', '', {duration: 1500});
      }
    );
  }
}
