import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { User } from '../models/Expense';

@Injectable()
export class UserService {

    private userAPIBaseUrl = 'https://trackeryaexpenseapi.herokuapp.com/api/users';
    constructor(private httpClient: HttpClient) {
    }

    GetUsers(): Promise<User[]> {
        return this.httpClient.get<User[]>(`${this.userAPIBaseUrl}`)
            .toPromise<User[]>();
    }

    GetUser(userId: string): Promise<User> {
        return this.httpClient.get<User>(`${this.userAPIBaseUrl}/${userId}`)
            .toPromise<User>();
    }

    AddUser(userPayload: any): Promise<User> {
        return this.httpClient.post<User>(`${this.userAPIBaseUrl}/create`, userPayload)
            .toPromise<User>();
    }
}
