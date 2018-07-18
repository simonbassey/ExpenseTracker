import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppMaterialModule } from './app.material.module';
import { UserService } from './core/services/user.service';
import { ExpenseService } from './core/services/expense.service';
import { NewuserDialogComponent } from './shared/dialog/newuser-dialog/newuser-dialog.component';
import { AdduserDialogComponent } from './shared/dialog/adduser-dialog/adduser-dialog.component';
import { SettingsService } from './core/services/settings.service';



@NgModule({
  declarations: [
    AppComponent,
    NewuserDialogComponent,
    AdduserDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppMaterialModule
  ],
  providers: [SettingsService, UserService, ExpenseService],
  bootstrap: [AppComponent],
  entryComponents: [NewuserDialogComponent, AdduserDialogComponent]
})
export class AppModule { }
