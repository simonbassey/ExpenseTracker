import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-adduser-dialog',
  templateUrl: './adduser-dialog.component.html',
  styleUrls: ['./adduser-dialog.component.css']
})
export class AdduserDialogComponent implements OnInit {

  public userPayload: any = {
    userName: '',
    email: ''
  };
  public loaderIsActive = false;
  public progressColor: string;
  constructor(private dialogInstance: MatDialogRef<AdduserDialogComponent>,
    private userService: UserService,
    private snackBarInstance: MatSnackBar
  ) {
    this.progressColor = 'primary';
   }

  ngOnInit() {
  }

  close() {
    this.dialogInstance.close();
  }

  createUSer() {
    this.loaderIsActive = true;
    this.userService.AddUser(this.userPayload).then(
      (response) => {
        this.loaderIsActive = false;
        this.cacheUserInfo(response);
        this.snackBarInstance.open('Account created', '', {duration: 500});
        this.dialogInstance.close(response);
      },
      (error) => {
        this.loaderIsActive = false;
      }
    );
  }

  cacheUserInfo(info) {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
    }
    localStorage.setItem('user', JSON.stringify(info));
  }

}
