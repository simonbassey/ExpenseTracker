import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Expense } from '../models/Expense';

@Injectable()
export class ExpenseService {

    private expenseAPiBase = 'https://trackeryaexpenseapi.herokuapp.com/api/expense';
    constructor(private httpClient: HttpClient) {
    }

    SaveExpense(expensePayload: any): Promise<Expense> {
        return this.httpClient.post<Expense>(`${this.expenseAPiBase}/create`, expensePayload)
            .toPromise<Expense>();
    }

    GetExpenses(): Promise<Expense[]> {
        return this.httpClient.get<Expense[]>(`${this.expenseAPiBase}`)
            .toPromise<Expense[]>();
    }

    GetExpensesForUser(userId: string): Promise<Expense[]> {
        return this.httpClient.get<Expense[]>(`${this.expenseAPiBase}/user/${userId}`)
        .toPromise<Expense[]>();
    }
}
