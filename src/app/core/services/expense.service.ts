import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from as fromPromise } from 'rxjs';
import { Expense } from '../models/Expense';
import { SettingsService, AppSettings } from './settings.service';

@Injectable()
export class ExpenseService {

    private expenseAPiBaseUrl: string;
    private _appSettings: AppSettings;
    constructor(private httpClient: HttpClient, settingsService: SettingsService) {
        this._appSettings = settingsService.GetSettings();
        this.expenseAPiBaseUrl = `${this._appSettings.APIBaseUrl}/expense`;
    }

    SaveExpense(expensePayload: any): Promise<Expense> {
        return this.httpClient.post<Expense>(`${this.expenseAPiBaseUrl}/create`, expensePayload)
            .toPromise<Expense>();
    }

    GetExpenses(): Promise<Expense[]> {
        return this.httpClient.get<Expense[]>(`${this.expenseAPiBaseUrl}`)
            .toPromise<Expense[]>();
    }

    GetExpensesForUser(userId: string): Promise<Expense[]> {
        return this.httpClient.get<Expense[]>(`${this.expenseAPiBaseUrl}/user/${userId}`)
        .toPromise<Expense[]>();
    }
}
